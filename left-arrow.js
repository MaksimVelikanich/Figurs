const len = 7;
let star = "*";
let space = " ";
for (let t = 0; t < 1; t++){
  for (let x = len,y = len/2;x<=len && x >= 0,y <= x ;x-=2,y--,star += "*"){
    console.log(" ".repeat(y)+star)}
  for (let x = len/2, y = 1;y < x, x <= len && x >= 0;y++ , x--){
    console.log(" ".repeat(y) +"*".repeat(x))}}
