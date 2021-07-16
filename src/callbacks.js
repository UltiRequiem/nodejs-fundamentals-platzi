const soyAsync = (callback) => {
  console.log('No soy Async');
  setTimeout(() => callback(), 100);
};

console.log('Start');
soyAsync(() => console.log('Async!!!'));
console.log('End');
