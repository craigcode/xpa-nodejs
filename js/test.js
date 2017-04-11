var test = require('./addnumbers');

var result = test('{"num1":1,"num2":2}',function(err, result){

  console.log(result);
});
