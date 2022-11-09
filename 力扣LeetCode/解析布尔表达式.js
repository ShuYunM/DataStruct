var parseBoolExpr = function (expression) {
  const stack = [];
  const n = expression.length;
  for (let i = 0; i < n; i++) {
    if (expression[i] === ",") {
      continue;
    } else if (expression[i] !== ")") {
      // 证明还没有结束,则入栈
      stack.push(expression[i]);
    } else {
      // 此时代表到)，则开始进行运算
      let t = 0,
        f = 0;
      while (stack[stack.length - 1] !== "(") {
        // 最后一项不为则运行,取出来
        let a = stack.pop();
        if (a === "f") {
          f++;
        } else {
          t++;
        }
      }
      // 到这代表此时运行到(了，取出(后就可以运算
      stack.pop();
      let op = stack.pop();
      switch (op) {
        // 取代一部分"|(&(t,f,t),!(t))"，此时将&(t,f,t)变为f
        case "!":
          stack.push(f === 1 ? "t" : "f");
          break;
        case "&":
          stack.push(f === 0 ? "t" : "f");
          break;
        case "|":
          stack.push(t > 0 ? "t" : "f");
          break;
        default:
      }
    }
  }
  return stack.pop() === "t";
};

console.log(parseBoolExpr("|(&(t,f,t),!(t))"));
