const len = 7
for (let x = 1, y=len/2;y <= len && y>=0, x <= len;y--, x+=2){
    console.log(" ".repeat(y)+"*".repeat(x))
}