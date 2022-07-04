let level =8
let input =1

    if (input == 1) 
    for (let asterisk = 1; asterisk <= level; asterisk++)  {
        for (let i = 0; i < asterisk; i++) {
            process.stdout.write("*");
        }
        console.log('');
    }

    else if (input == 1) // second pyramid
        for (let asterisk = 0; asterisk < level; asterisk++)  {
            for (let i = 0; i < level - asterisk; i++) {
                process.stdout.write("*");
            }
            console.log('');
        }


    else if (input == 1) { // third pyramid
        
    } else { // fourth pyramid
        
    }


