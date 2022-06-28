let level =8
for (let a = 1; a<=level; a++) {
    for (let i=0; i<=level -a; i++) {
      process.stdout.write("*");
    }
    console.log("");
  }