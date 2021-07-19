process.on('uncaughtException', (err, origin) =>
  console.log(`Error: ${origin} -> ${err}.`)
);
console.log('Some Stuff...');

console.log(uwu());

process.on('beforeExit', () => console.log('Close to end!'));
process.on('exit', () => console.log('End!'));
