const abc = Buffer.alloc(26);

for (let i = 0; i <= 26; i++) {
  abc[i] = i + 97;
}

console.log(abc.toString().split(''));
