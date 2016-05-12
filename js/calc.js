var ac = $("#ac"),
    ce = $("#ce"),
    per = $("#percent"),
    div = $("#divide"),
    mul = $("#multiply"),
    min = $("#minus"),
    plus = $("#plus"),
    equals = $("#equals"),
    ans = $("#ans"),
    dot = $("#dot"),
    one = $("#one"),
    two = $("#two"),
    three = $("#three"),
    four = $("#four"),
    five = $("#five"),
    six = $("#six"),
    seven = $("#seven"),
    eight = $("#eight"),
    nine = $("#nine"),
    zero = $("#zero"),
    screen = $("#screen"),
    onScreen = "",
    math = [],
    opLast = false;

var assignButtons = function(){
    ac.on("click", function(){
      clearScreen();
      math = [];
      opLast = false;
    });
    ce.on("click", function(){
      updateScreen("");
      math.pop();
    });
    per.on("click", function(){
      if(math.length && !opLast){
        updateScreen("%");
        math.push("%");
        opLast = true;
      }
    });
    div.on("click", function(){
      if(math.length && !opLast){
      updateScreen("/");
        math.push("/");
        opLast = true;
      }
    });
    mul.on("click", function(){
      if(math.length && !opLast){
      updateScreen("x");
        math.push("*");
        opLast = true;
      }
    });
    min.on("click", function(){
      if(math.length && !opLast){
      updateScreen("-");
        math.push("-");
        opLast = true;
      }
    });
    plus.on("click", function(){
      if(math.length && !opLast){
      updateScreen("+");
      math.push("+");
      opLast = true;
      }
    });
    equals.on("click", function(){
      calculate(math);
    });
    ans.on("click", function(){
      updateScreen("Ans");
       math.push(ans);
      opLast = false;      
    });
    dot.on("click", function(){
      updateScreen(".");
      math.push(".");
      opLast = false;
    });
    one.on("click", function(){
      updateScreen("1");
      math.push(1);
      opLast = false;
    });
    two.on("click", function(){
      updateScreen("2");
      math.push(2);
      opLast = false;
    });
    three.on("click", function(){
      updateScreen("3");
      math.push(3);
      opLast = false;
    });
    four.on("click", function(){
      updateScreen("4");
      math.push(4);
      opLast = false;
    });
    five.on("click", function(){
      updateScreen("5");
      math.push(5);
      opLast = false;
    });
    six.on("click", function(){
      updateScreen("6");
      math.push(6);
      opLast = false;
    });
    seven.on("click", function(){
      updateScreen("7");
      math.push(7);
      opLast = false;
    });
    eight.on("click", function(){
      updateScreen("8");
      math.push(8);
      opLast = false;
    });
    nine.on("click", function(){
      updateScreen("9");
      math.push(9);
      opLast = false;
    });
    zero.on("click", function(){
      updateScreen("0");
      math.push(0);
      opLast = false;
    });
};

var updateScreen = function(add){
  if(add){
    onScreen = onScreen + add;
  }else{
    onScreen = onScreen.substring(0, onScreen.length - 1)
  }
  screen.html(onScreen);
};

var clearScreen = function(){
  onScreen = "";
  screen.html(onScreen);
}

var calculate = function(arr){
  // Combine Numbers
  for(i=0; i < arr.length; i++){
    if(typeof arr[i] === "number" && typeof arr[i+1] === "number"){
      arr[i+1] += arr[i]*10;
      arr.splice(i,1);
      i--;
    }
    if(arr[i] === "."){
      x = 1;
      while(typeof arr[i+1] === "number"){
        arr[i-1] += arr[i+1] / Math.pow(10,x);
        x++
        arr.splice(i+1,1);
      }
      arr.splice(i,1);
    }
  };
  // Percent
  for(i=0; i < arr.length; i++){
    if(arr[i] === "%"){
      arr[i+1] /= arr[i-1];
      arr.splice(i-1,2);
      i-2;
    };
  };
  // Division
  for(i=0; i < arr.length; i++){
    if(arr[i] === "/"){
      arr[i+1] = arr[i-1]/arr[i+1];
      arr.splice(i-1,2);
      i-2;
    };
  };
  // Multiplication
  for(i=0; i < arr.length; i++){
    if(arr[i] === "*"){
      arr[i+1] = arr[i-1]*arr[i+1];
      arr.splice(i-1,2);
      i-2;
    };
  };
  // Addition
  for(i=0; i < arr.length; i++){
    if(arr[i] === "+"){
      arr[i+1] += arr[i-1];
      arr.splice(i-1,2);
      i-2;
    };
  };
  // Subtraction
  for(i=0; i < arr.length; i++){
    if(arr[i] === "-"){
      arr[i+1] = arr[i-1] - arr[i+1];
      arr.splice(i-1,2);
      i-2;
    };
  };
  clearScreen();
  updateScreen(math);
  onScreen = "";
  ans = math;
  math = [];
};

$(function(){
  assignButtons();
})