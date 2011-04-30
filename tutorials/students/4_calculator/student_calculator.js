
	
var currentValue = "";
var selectedOperator = "";
var memory = "";
var Calculator = function(firstValue, secondValue) {
    this.firstValue = Number(firstValue || 0);  // always ensure inputs are the right types
    this.secondValue = Number(secondValue || 0);  // best to ensure before storing in a class
};

Calculator.prototype.add  = function() {
  return this.firstValue + this.secondValue;
};
Calculator.prototype.sub  = function() {
  return this.firstValue - this.secondValue;
};
Calculator.prototype.mult = function() {
  return this.firstValue * this.secondValue;
};
Calculator.prototype.div  = function() {
  return this.firstValue / this.secondValue;
};
 
function addEventHandler(){
	var buttons = document.getElementsByClassName ("button");
	for (var i in buttons) {
	console.log(buttons);
//	var buttonCounter = 0;
	function buttonClicked(evt){
		var targVal = getInnerText(evt.target);
		//console.log(targVal);
		//buttonCounter++;
		//var currentValue = "";
		//var firstButton
		if (currentValue === "0"){				
				currentValue ="";
			}
		switch(targVal){
			case "0":
				console.log(getDisplayAsFloat());
				if (currentValue === "00"){				
					currentValue = 0;
				}
				else {
					currentValue = currentValue + "0";
				}
				setDisplayAsText(currentValue);
				break;
			case "1":
				currentValue = currentValue + "1";
				setDisplayAsText(currentValue);
				break;
			case "2":
				currentValue = currentValue + "2";
				setDisplayAsText(currentValue);
				break;
			case "3":
				currentValue = currentValue + "3";
				setDisplayAsText(currentValue);
				break;
			case "4":
				currentValue = currentValue + "4";
				setDisplayAsText(currentValue);
				break;
			case "5":
				currentValue = currentValue + "5";
				setDisplayAsText(currentValue);
				break;
			case "6":
				currentValue = currentValue + "6";
				setDisplayAsText(currentValue);
				break;
			case "7":
				currentValue = currentValue + "7";
				setDisplayAsText(currentValue);
				break;
			case "8":
				currentValue = currentValue + "8";
				setDisplayAsText(currentValue);
				break;
			case "9":
				currentValue = currentValue + "9";
				setDisplayAsText(currentValue);
				break;
			case ".":
				//var searchDot = /./;
				var alreadyFloat = currentValue.indexOf(".");
				console.log(currentValue);
				console.log(alreadyFloat);
				if (alreadyFloat < 0){
					currentValue = currentValue + ".";
					setDisplayAsText(currentValue);
				}
				break;
			case "+":
				selectedOperator = "+"
				console.log(selectedOperator);
				firstValue = getDisplayAsFloat();
				console.log(firstValue);
				currentValue = ""
				break;
			case "-":
				selectedOperator = "-"
				firstValue = getDisplayAsFloat();
				currentValue = ""
				break;
			case "*":
				selectedOperator = "*"
				firstValue = getDisplayAsFloat();
				currentValue = ""
				break;
			case "/":
				selectedOperator = "/"
				firstValue = getDisplayAsFloat();
				currentValue = ""
				break;
			case "C":
				currentValue = "0"
				setDisplayAsText(currentValue);
				break;
			case "+/-":
				currentValue = currentValue * -1;
				setDisplayAsText(currentValue);
				break;
			case "MC": //Memory Clear
				memory = "";
				//setDisplayAsText(currentValue);
				break;
			case "MR":  //Show Memory Value
				memory = currentValue;
				setDisplayAsText(memory);
				break;
			case "M+":  //Show Memory Value
				memory = currentValue;
				//setDisplayAsText(currentValue);
				break;
		case "=":
				var calc = new Calculator(firstValue,currentValue);
				switch(selectedOperator){
					case "+":
						setDisplayAsText(calc.add(firstValue,currentValue));
						break;
					case "-":
						setDisplayAsText(calc.sub(firstValue,currentValue));
						break;
					case "*":
						setDisplayAsText(calc.mult(firstValue,currentValue));
						break;
					case "/":
						setDisplayAsText(calc.div(firstValue,currentValue));
						break;
				}
		}
	}
	addEvent(buttons[i], "click", buttonClicked);
	//document.getElementsByClassName
	}
}

addEvent(window, "load", addEventHandler());
