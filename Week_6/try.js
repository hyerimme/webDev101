let level =8 
let input =1
if (input == 1) // second pyramid
for (let asterisk = 1; asterisk < level; asterisk++)  {
    for (let j = 0; j < level - asterisk; j++) {
        process.stdout.write("  ");
    }
     for (let k = 0; k < level - asterisk ; k++)  {
        process.stdout.write("*");
     }
    console.log('');
}

