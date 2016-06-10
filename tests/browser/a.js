define(['b', 'c'], function (b, c) {

  function letsDoThis (message) {
    alert ("doing it..." + message);
  };
  
  var msg = "the message is key"
  letsDoThis( msg );
  
  return {
    name: 'a',
    b: b,
    c: c
  };
  
});
