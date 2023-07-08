	function rollInitiative(){
		 
		 
		 
		rollVal = Math.floor(Math.random()*6)+1;
	    document.getElementById("resultAreaInitiative").value=rollVal;
	}
	
	function clearAll(){
		console.log("Clear All");
		 document.getElementById("resultAreaInitiative").value=" ";
		 document.getElementById("resultAreaDice").value=" ";
		 document.getElementById("resultAreaTotal").value=" ";
		 document.getElementById("resultArea").value=" ";
	
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
		var draw =getDraw();
		var sp = "";
		var cr = "";
		var cn = "";
		var encounter = "\nMinions In This Encounter\n";
		for (var d = 0; d < draw; d++)
		{
			sp = getStressPoints();
			cr = getCritterRating();
			encounter = encounter + "A "+cr+" minion\n with "+sp+" Hit Points\n";
		}
		document.getElementById("resultArea").value=encounter;
	}

	function getDraw() {
	// This function determines how many critters to generate per encounter.
		var numSel = document.getElementById("numberBH").selectedIndex;
		var numOpt = document.getElementById("numberBH").options;
		var numberBH = numOpt[numSel].value;
		var minionCnt = numberBH;
			if (numberBH == 0){
			minionCnt= 1;
		}
		if (numberBH == 1){
			minionCnt=Number(minionCnt)+(Math.round(Math.random()*1));
		}
		if (numberBH == 2){
			minionCnt=Number(minionCnt)+(Math.round(Math.random()*1));
		}
		if (numberBH == 3){
			minionCnt=Number(minionCnt)+(Math.round(Math.random()*3)-1);
		}
		if (numberBH == 4){
			minionCnt=Number(minionCnt)+(Math.round(Math.random()*3)-1);
		}
		if (numberBH == 5){
			minionCnt=Number(minionCnt)+(Math.round(Math.random()*3)-1);
		}
		if (numberBH == 6){
			minionCnt=Number(minionCnt)+(Math.round(Math.random()*3)-1);
		}

		return minionCnt;
	}

	
	function getStressPoints(){
		var roll=Math.round(Math.random()*5)+1;
		return roll;
	}

	function getCritterRating(){
		var dfOpt = document.getElementById("difficultySetting").options;
		var dfSel = document.getElementById("difficultySetting").selectedIndex;
		var adjustment = (dfOpt[dfSel].value);
	
	/*
  Rank Ranges Med= 10 Fair  = 30 Good = 70, Great = 80, Superb = 90 
  Easy = -10, Normal = 0, Hard = +10
*/
		var tempRoll=(Math.round(Math.random()*100)+1);
		var roll = Number(tempRoll) +Number(adjustment);
		var cr = "";
		if (roll <= 10) {
			cr = "MEDIOCRE (Green)";
		}
		if (roll > 10 && roll <= 30) {
			cr = "FAIR (Blue)";
		}
		if (roll > 30 && roll <= 70) {
			cr = "GOOD (White)";
		}
		if (roll > 70 && roll <= 90) {
			cr = "GREAT (Yellow)";
		}
		if (roll > 90) {
			cr = "SUPERB (Red)";
		}
		return cr;
	}
