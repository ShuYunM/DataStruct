var interpret = function (command) {
  let res = "";
  for (let index = 0; index < command.length; index++) {
    if (command[index] === "G") {
      res += command[index];
    } else if (command[index] === "(") {
      if (command[index + 1] === ")") {
        res += "o";
      } else {
        res += "al";
      }
    }
  }
  console.log(command.replace("()", "o").replace("(al)", "al"));
  console.log(command.replace(/\(\)/g, "o").replace(/\(al\)/, "al"));
  console.log(res);
};

console.log(interpret("G()(al)"));
