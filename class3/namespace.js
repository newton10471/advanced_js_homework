function namespace(args) {
  
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

test("call namespace function", function() {
  ok(namespace("app.models") === app.models, "Passed!");
 app = undefined;
});

test("call namespace function", function() {
  ok(namespace("app.view3") === app.view3, "Passed!");
  app = undefined;

});

test("call namespace function", function() {
  ok(namespace("app.view.ken.can.javascript") === app.view.ken.can.javascript, "Passed!");
  app = undefined;
});

test("don't override existing", function() {
  namespace("app.view.ken");
  app.view.ken.View = function(){}; 
  namespace("app.view.matt");
  ok(app.view);
  app = undefined;
});

test("don't override existing", function() {
  namespace("app.view.ken");
  app.view.ken.View = function(){}; 
  namespace("app.view.matt");
  ok(app.view.ken.View);
  app = undefined;
});
