var fs = require("fs");
var util = require("util");
var irConverter = require("./index.js");

if (process.argv.length != 3){
	console.log("Pronto codes converter to lircd.conf format");
	console.log(""); 
	console.log("Usage:   node pronto2lirc <inputfile>");
	console.log("");
	console.log("Inputfile can be:");
	console.log("         1.Text file where each line contains the name of the button and ");
	console.log("         all codes associated with it:");
	console.log("         Button1:0000 00ac 000b 00de ...");
	console.log("         1.Text file where one line contains the name of the button and ");
	console.log("         next line contains all codes associated with it:");
	console.log("         Button1");
	console.log("         0000 00ac 000b 00de ...");
	console.log("");
	console.log("Result:  lircd.conf file is written to the current directory");
	console.log("         containing all the Pronto codes extracted from");
	console.log("         the input file");
	console.log("");
	process.exit();
}

var fileName = process.argv[2];

if (!fs.existsSync(fileName)){
	console.log("ERROR: file not found");
	process.exit();
}

fs.readFile(fileName, {encoding: 'utf8'}, function(err, data){
	if (err){
		console.log(err);
		process.exit();
	}

	var strings = data.split("\n");
	var commands = [];
	var lgap = 0;
	for(var i = 0; i < strings.length; i++){
		if (strings[i].trim() == '')
			continue;
		
		var cmd;
		if (strings[i].indexOf(':') && strings[i].split(':').length == 2 && irConverter.CCFValid(strings[i].trim().split(':')[1])){
			cmd = strings[i].trim().split(':');
		} else if (strings[i].trim().length > 0 && irConverter.CCFValid(strings[i+1].trim())){
			cmd = [];
			cmd.push(strings[i].trim());
			cmd.push(strings[i+1].trim());
			++i;
		} else {
			continue;
		}

		var raw = CCFtoRAW(cmd[1]);
		if (typeof raw === 'string'){
			console.log(raw);
			continue;
		}

		if (raw.gap > lgap)
			lgap = raw.gap;

		commands.push({"sCodeName": cmd[0], "raw": raw.raw});
	}

	if (commands.length == 0){
		console.log("Error: hex not found or in incorrect format");
		process.exit();
	}

	writeLircConf(fileName.split(".")[0], commands, lgap);
});

function CCFtoRAW(strInput){
	var dPulseWidths = irConverter.CCFtoRAW(strInput).split(" ");
    var finalgap = dPulseWidths.pop();
    return {"raw": dPulseWidths.join(" "), "gap": finalgap};
};

function writeLircConf(deviceName, commands, gap){
	var text = '';

	text = text + 'begin remote\n\n';
	text = text + '\tname\t' + deviceName + '\n';
	text = text + '\tflags\tRAW_CODES\n';
	text = text + '\teps\t30\n';
	text = text + '\taeps\t100\n';
	text = text + '\tgap\t' + gap + '\n\n';
	text = text + '\t\tbegin raw_codes\n';

	for (var key in commands){
		text = text + '\n\t\t\tname ' + commands[key].sCodeName + '\n';

		var pulses = commands[key].raw.split(" ");
		for (var i = 0; i < pulses.length; i++){
			if (i % 6 == 0)
				text = text + '\t\t\t\t';

			text = text + pulses[i] + ' ';

			if ((i + 1) % 6 == 0)
				text = text + '\n';
		}

		text = text + '\n';
	}

	text = text + '\n\t\tend raw_codes\n\n';
	text = text + 'end remote\n';

	fs.writeFile(deviceName + ".conf", text, function(err){
		if (err){
			console.log(err);
			process.exit();
		}

		console.log("File is saved");
		process.exit();
	});
};