// Here is a skeleton code for you
let input = 2; // user's input for which pyramid to build
let level = 8; // user's input for how tall the pyramid will be
process.stdout.write(" ");
/* ToDo: write codes for building pyramids by using for loops (nested)
 and if statement */
if (input == 1) { // first pyramid
    for (let a =1 ; a <= level; a++){
        for (let i =0; i<a; i++){
          process.stdout.write("*");}
  console.log('');}
}

else if (input == 2) { // second pyramid
for (let a = 1; a<=level; a++) {
  for (let i=0; i<=level -a; i++) {
    process.stdout.write("*"); }
  console.log("");} 
}

else if (input == 3) { // third pyramid
    
} else { // fourth pyramid
    
}