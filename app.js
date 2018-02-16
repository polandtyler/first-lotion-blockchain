const lotion = require('lotion');

let app = lotion({
  initialState: {
    count: 0
  }
});


// middleware MUST be deteministic
app.use(function (state, tx) {
  if(state.count === tx.nonce) {
    state.count++;
  }
});

app.listen(3000).then(genesis => {
  console.log('App listening on port 3000. You have launched your first blockchain!')
});
