const len = 7;
for (i = 1;i <= len; i++){
    console.log("*".repeat(i<=Math.ceil(len/2) ? i : len-i+1))
}