irconverter
==========================
# Description
Library to convert the IR codes from CCF-format to GlobalCache, from GlobalCache to CCF-format, from CCF-format to RAW; and so maker conf-files to Lirc from files with CCF-commands 

# What's inside?
It will include two files:

'index.js' : library to convert the IR codes.
Library contains functions:

- bool CCFValid(str) - check the CCF-code and return true (valid) or false (not valid);
- string CCFtoGC(str) - check the CCF-code and convert it to GC-command (return string);
- string CCFtoRAW(str) - check the CCF-code and convert it to RAW-format (return string);
- string GCtoCCF(str) - check the GC-command and convert it to CCF-code (return string);

'pronto2lirc.js' : maker conf-files to Lirc from files with CCF-commands.
 
# Usage

## index.js

```
var lib = require('irconverter');

console.log(lib.CCFtoGC("0000 0073 0000 0012 0060 0021 0011 0020 0011 0010 0011 0011 0011 0020 001F 0010 0020 0022 0010 0011 0011 000F 0021 0011 0010 0021 0020 0011 0010 0022 0010 0011 0011 0010 0021 0011 0010 0011 000F 0BF6"));

console.log(lib.GCtoCCF("sendir,1:1,1,38000,1,1,341,170,22,20,22,20,22,62,22,20,22,20,22,20,22,20,22,62,22,20,22,20,22,62,22,20,22,62,22,62,22,62,22,20,22,62,22,62,22,62,22,62,22,62,22,62,22,62,22,62,22,20,22,20,22,20,22,20,22,20,22,20,22,20,22,20,22,1586,341,85,22,3626,341,85,22,3625,341,85,22,3800"));

console.log(lib.CCFtoRAW(GCtoCCF("sendir,1:1,1,38000,1,1,341,170,22,20,22,20,22,62,22,20,22,20,22,20,22,20,22,62,22,20,22,20,22,62,22,20,22,62,22,62,22,62,22,20,22,62,22,62,22,62,22,62,22,62,22,62,22,62,22,62,22,20,22,20,22,20,22,20,22,20,22,20,22,20,22,20,22,1586,341,85,22,3626,341,85,22,3625,341,85,22,3800")));
```


## pronto2lirc.js

```
node pronto2lirc.js apple.txt
```
File apple.txt contains CCF-codes, by example:
```
menu
0000 006d 0000 0024 015c 00ac 0015 0016 0015 0040 0015 0040 0015 0040 0015 0016 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0016 0015 0016 0015 0016 0015 0016 0015 0040 0015 0040 0015 0040 0015 0016 0015 0016 0015 0016 0015 0016 0015 0016 0015 0016 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0016 0015 0016 0015 0016 0015 05bb 015b 0055 0015 02f8

play
0000 006d 0000 0044 015c 00ab 0015 0015 0015 0040 0015 0040 0015 0040 0015 0015 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0015 0015 0015 0015 0015 0015 0015 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0015 0015 0040 0015 0015 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0015 0015 0015 0015 0015 0015 0515 015c 00ab 0015 0015 0015 0040 0015 0040 0015 0040 0015 0015 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0015 0015 0015 0015 0015 0015 0015 0015 0040 0015 0040 0015 0015 0015 0040 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0015 0015 0015 0015 0015 0015 02f8

ok
0000 006d 0000 0044 015c 00aa 0015 0016 0015 0040 0015 0040 0015 0040 0015 0016 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0016 0015 0016 0015 0016 0015 0016 0015 0040 0015 0016 0015 0016 0015 0040 0015 0040 0015 0040 0015 0016 0015 0040 0015 0016 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0016 0015 0016 0015 0016 0015 056d 015c 00aa 0015 0016 0015 0040 0015 0040 0015 0040 0015 0016 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0016 0015 0016 0015 0016 0015 0016 0015 0040 0015 0040 0015 0016 0015 0040 0015 0016 0015 0016 0015 0016 0015 0016 0015 0016 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0016 0015 0016 0015 0016 0015 02f8

up
0000 006a 0000 0024 015c 00ac 0015 0016 0015 0040 0015 0040 0015 0040 0015 0016 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0016 0015 0016 0015 0016 0015 0016 0015 0040 0015 0016 0015 0040 0015 0016 0015 0040 0015 0016 0015 0016 0015 0016 0015 0016 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0016 0015 0016 0015 0016 0015 05c0 015b 0056 0015 030c

down
0000 006d 0000 0024 015c 00ac 0015 0016 0015 0040 0015 0040 0015 0040 0015 0016 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0016 0015 0016 0015 0016 0015 0016 0015 0040 0015 0016 0015 0016 0015 0040 0015 0040 0015 0016 0015 0016 0015 0016 0015 0016 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0016 0015 0016 0015 0016 0015 05bc 015b 0056 0015 02f8

left
0000 006d 0000 0024 015c 00ac 0015 0015 0015 003f 0015 003f 0015 003f 0015 0015 0015 003f 0015 003f 0015 003f 0015 003f 0015 003f 0015 003f 0015 0015 0015 0015 0015 0015 0015 0015 0015 003f 0015 003f 0015 0015 0015 0015 0015 003f 0015 0015 0015 0015 0015 0015 0015 0015 0015 003f 0015 003f 0015 003f 0015 003f 0015 003f 0015 0015 0015 0015 0015 0015 0015 05bc 015b 0056 0015 02f8

right
0000 006d 0000 0024 015c 00ac 0015 0016 0015 0040 0015 0040 0015 0040 0015 0016 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0016 0015 0016 0015 0016 0015 0016 0015 0040 0015 0016 0015 0040 0015 0040 0015 0016 0015 0016 0015 0016 0015 0016 0015 0016 0015 0040 0015 0040 0015 0040 0015 0040 0015 0040 0015 0016 0015 0016 0015 0016 0015 05bb 015b 0056 0015 02f8
```
Get the file apple.conf:
```
begin remote

    name    apple
    flags   RAW_CODES
    eps 30
    aeps    100
    gap 19985

        begin raw_codes

            name menu ---
                9151 4522 552 578 552 1682 
                552 1682 552 1682 552 578 
                552 1682 552 1682 552 1682 
                552 1682 552 1682 552 1682 
                552 578 552 578 552 578 
                552 578 552 1682 552 1682 
                552 1682 552 578 552 578 
                552 578 552 578 552 578 
                552 578 552 1682 552 1682 
                552 1682 552 1682 552 1682 
                552 578 552 578 552 578 
                552 38576 9124 2235 552 

            name play/pause ---
                9151 4496 552 552 552 1682 
                552 1682 552 1682 552 552 
                552 1682 552 1682 552 1682 
                552 1682 552 1682 552 1682 
                552 552 552 552 552 552 
                552 552 552 1682 552 1682 
                552 1682 552 1682 552 1682 
                552 1682 552 552 552 1682 
                552 552 552 1682 552 1682 
                552 1682 552 1682 552 1682 
                552 552 552 552 552 552 
                552 34211 9151 4496 552 552 
                552 1682 552 1682 552 1682 
                552 552 552 1682 552 1682 
                552 1682 552 1682 552 1682 
                552 1682 552 552 552 552 
                552 552 552 552 552 1682 
                552 1682 552 552 552 1682 
                552 552 552 552 552 552 
                552 552 552 552 552 1682 
                552 1682 552 1682 552 1682 
                552 1682 552 552 552 552 
                552 552 552 

            name ok ---
                9151 4470 552 578 552 1682 
                552 1682 552 1682 552 578 
                552 1682 552 1682 552 1682 
                552 1682 552 1682 552 1682 
                552 578 552 578 552 578 
                552 578 552 1682 552 578 
                552 578 552 1682 552 1682 
                552 1682 552 578 552 1682 
                552 578 552 1682 552 1682 
                552 1682 552 1682 552 1682 
                552 578 552 578 552 578 
                552 36525 9151 4470 552 578 
                552 1682 552 1682 552 1682 
                552 578 552 1682 552 1682 
                552 1682 552 1682 552 1682 
                552 1682 552 578 552 578 
                552 578 552 578 552 1682 
                552 1682 552 578 552 1682 
                552 578 552 578 552 578 
                552 578 552 578 552 1682 
                552 1682 552 1682 552 1682 
                552 1682 552 578 552 578 
                552 578 552 

            name up ---
                8899 4398 537 562 537 1636 
                537 1636 537 1636 537 562 
                537 1636 537 1636 537 1636 
                537 1636 537 1636 537 1636 
                537 562 537 562 537 562 
                537 562 537 1636 537 562 
                537 1636 537 562 537 1636 
                537 562 537 562 537 562 
                537 562 537 1636 537 1636 
                537 1636 537 1636 537 1636 
                537 562 537 562 537 562 
                537 37642 8873 2199 537 

            name down ---
                9151 4522 552 578 552 1682 
                552 1682 552 1682 552 578 
                552 1682 552 1682 552 1682 
                552 1682 552 1682 552 1682 
                552 578 552 578 552 578 
                552 578 552 1682 552 578 
                552 578 552 1682 552 1682 
                552 578 552 578 552 578 
                552 578 552 1682 552 1682 
                552 1682 552 1682 552 1682 
                552 578 552 578 552 578 
                552 38603 9124 2261 552 

            name left ---
                9151 4522 552 552 552 1656 
                552 1656 552 1656 552 552 
                552 1656 552 1656 552 1656 
                552 1656 552 1656 552 1656 
                552 552 552 552 552 552 
                552 552 552 1656 552 1656 
                552 552 552 552 552 1656 
                552 552 552 552 552 552 
                552 552 552 1656 552 1656 
                552 1656 552 1656 552 1656 
                552 552 552 552 552 552 
                552 38603 9124 2261 552 

            name right ---
                9151 4522 552 578 552 1682 
                552 1682 552 1682 552 578 
                552 1682 552 1682 552 1682 
                552 1682 552 1682 552 1682 
                552 578 552 578 552 578 
                552 578 552 1682 552 578 
                552 1682 552 1682 552 578 
                552 578 552 578 552 578 
                552 578 552 1682 552 1682 
                552 1682 552 1682 552 1682 
                552 578 552 578 552 578 
                552 38576 9124 2261 552 

        end raw_codes

end remote
```