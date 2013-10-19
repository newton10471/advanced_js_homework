function namespace(args) {
  args = args.split('.');
  this[args[0]] = {};
  this[args[0]][args[1]] = {};
  this[args[0]][args[1]][args[2]] = {};

  // that = this;

  // current = args[0];
  // this[current] = {};


  // for(var i = 0; i<args.length; i++) {
  //   current = that[current];
  //   current[args[i]] = {};
  // };

};

function namespace_inclass(args) {
  
  var args = args.split(".");
  //console.log(eval(args[0]));
  
  //eval(args[0] + '= {}');
  //return eval(args[0] + '.' + args[1] + '={}');
  
  //return 
  var rs = '';
  for(var i = 0; i < args.length + 1; i++) { 
    
    var cmd = args[0];
    var preCmd = '';
    for (var j = 1; j < i; j++) {
      preCmd = cmd;
      cmd = cmd + '.' + args[j];
      
    };
    //tmp = eval(cmd);
    console.log("CMD: " + cmd);
    console.log("TYPEOF EVAL CMD: " + preCmd + ' is '+ typeof eval(preCmd));
    //console.log()
    
    if(typeof eval(cmd) == 'undefined'){
      eval(cmd + '={}');
    } else {
      eval(preCmd +'={}');
      console.log("already defined");
    };
    
    rs = eval(cmd);
  };
  
  //console.log(rs);
  return rs;
  
  //app = {};
  //app.models = {};
  //return app.models;
  //console.log(app.models);
  
};

test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
});

test("call namespace function with 1 level", function() {
	namespace('app');
	ok(app.View = function(){}, "Passed!");
//	app = undefined;
});

test("call namespace function with 2 levels", function() {
	namespace('app.models');
  ok(app.models.View = function(){}, "Passed!");
//  app = undefined;
});

test("call namespace function with 3 levels", function() {
  namespace('app.models.test');
  ok(app.models.test.View = function(){}, "Passed!");
//  app = undefined;
});

test("call namespace function with 4 levels", function() {
  namespace('app.models.test.again');
  ok(app.models.test.again.View = function(){}, "Passed!");
//  app = undefined;
});

test("don't override existing", function() {
  namespace('app.models.test');
  ok(namespace('app.models.test'), "Passed!");
//  app = undefined;
});

