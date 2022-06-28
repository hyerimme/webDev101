let level =8
for (let a = 1; a<=level; a++) {
    for (let i=0; i<a; i++) {
      process.stdout.write(" ");
    }
     for (let k=0; k<=level-a; k++) {
      process.stdout.write("*")
     }
    console.log("");
  }