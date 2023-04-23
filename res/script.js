	function rollInitiative(){
		rollVal = Math.round(Math.random()*6)+1;
	    document.getElementById("resultAreaInitiative").value=rollVal;
	}

      function roll(){
        var sp = "";
        var result = "";
        var total = 0;

        for (var d = 0; d < 4; d++)  {
          sp = get4dF();
          total = total + sp;
          if (sp == -1){
            sp = "-";
          }
          if (sp == 0){
            sp = "O";
          }
          if (sp == 1){
            sp = "+";
          }
          result = result + sp;
        }
        document.getElementById("resultAreaDice").value=result;
        document.getElementById("resultAreaTotal").value=total;
      }

      function get4dF() {
        rollVal = Math.round(Math.random()*2)-1;
        return rollVal;
      }
	  
	 // Minion Machine JS
	var critter = new Array();

	function generateCritters(){

		var draw = getDraw();
		var sp = "";
		var cr = "";
		var cn = "";
		

		var encounter = "\nMinions In This Encounter\n";
		for (var d = 0; d < draw; d++)
		{
			sp = getStressPoints();
			cr = getCritterRating();
			encounter = encounter + "A "+cr+" minion with "+sp+" Hit Points\n";
		}
		document.getElementById("resultArea").value=encounter;
	}

	function getDraw() {

	// This function determines how many critters to generate per encounter.
	// The base is 1 per player. Easy encounter will have 25% less critters,
	// and Hard encounters will have 25% more. And extra randomiser
	// is applied that my further increase or decrease the number of critters drawn.

		var numSel = document.getElementById("numberBH").selectedIndex;
		var numOpt = document.getElementById("numberBH").options;
		var dfSel = document.getElementById("difficultySetting").selectedIndex;
		var dfOpt = document.getElementById("difficultySetting").options;
		var numberBH = numOpt[numSel].value;
		var ratio = (dfOpt[dfSel].value)/100;
		var extra = numberBH/3;
		var add = ( Math.round(Math.random()* extra) - Math.round(Math.random()* extra)) * Math.round(Math.random()*1)
		var numbersEncountered = numberBH * ratio + add;
		return Math.round(numbersEncountered);
	}

	function getStressPoints(){
		var roll=Math.round(Math.random()*5)+1;
		return roll;
	}

	function getCritterRating(){
		var roll=Math.round(Math.random()*100)+1;
		var cr = "";
		if (roll <= 18) {
			cr = "MEDIOCRE (Green)";
		}
		if (roll > 18 && roll <= 44) {
			cr = "FAIR (Blue)";
		}
		if (roll > 44 && roll <= 62) {
			cr = "GOOD (White)";
		}
		if (roll > 62 && roll <= 80) {
			cr = "GREAT (Yellow)";
		}
		if (roll > 80) {
			cr = "SUPERB (Red)";
		}
		return cr;
	}
