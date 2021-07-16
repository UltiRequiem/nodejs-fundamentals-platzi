function talk(callback) {
  setTimeout(() => {
    console.log('Bla, bla, bla');
    callback();
  });
}

talk(() => {
  talk(() => talk(()=>talk(()=>talk(()=>talk(()=>console.log('Hell'))))));
});
