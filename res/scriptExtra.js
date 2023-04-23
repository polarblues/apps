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

	critter[1] = "The Iron Overlords are a large gang of roving marauders. \n\nThe highest level critter is the boss and wields a +2 sledgehammer.";
	critter[2] = "The Aztec Renaissances is a doom-cult with loose Aztec roots and a penchant for human sacrifice. \n\nThe first critter drawn is a giant snake and has 2x its normal Stress Points.";
	critter[3] = "The Skull Society are a gang known for their sadistic streak. \n\nUp to three Skull Society members will try to gang up on the weakest (lowest number of Stress Points) Bounty Hunter.";
	critter[4] = "The Clay People are a mutant doom-cult. They kidnap people and turn them into mindless, mutant clay beings by immersing them in special irradiated mud pools. \n\nOnly MEDIOCRE critters have ranged attacks. They can throw irradiated mud balls that do +3 damage. Clay people dissolve in water (splashing them with water does MoS + GOOD damage).";
	critter[5] = "The Braniacs are a Psycher only gang. They only communicate telepathically. \n\nBrainiacs can make direct psionic attacks (Psi vs. Psi). The highest ranking critter will have either the Puppeteer, Jinx or Psychic Storm stunt. ";
	critter[6] = "Cyborg Raiders are bands cyborgs. They hunting for replacement parts, both mechanical and organic. \n\nAll cyborgs have the have the Psi Immunity stunt";
	critter[7] = "Feral Robots are robots that no longer follow their original programming. They often behave in mysterious ways and can turn aggressive very suddenly. \n\nAll robots have the Psi Immunity stunt ";
	critter[8] = "Outlaw Desperados are criminals on the run from the law. They usually prey on any soft target they can find. \n\nAny individual outlaw desperados with a Critter Rating of GREAT can use the Two Gun Fighting stunt.";
	critter[9] = "The US Army Extermination Unit (AEU) is a high-tech military-style organisation dedicated to the eradication of all mutants. Its members wear full environmental hazard suits and are often accompanied by Sterilizer robots. \n\nAEU will target mutants first. Any critter GREAT or better is a robot and has the Psi Immunity stunt. ";
	critter[10] = "Grand Nuclear Family (GNF) militants are a mutant supremacist group. \n\nGNF militants with a Critter Rating of GREAT or above have the Mental Blast stunt.";
	critter[11] = "Hungry Desert Bloodstalkers are mean, hungry critters. \n\nAll hungry desert bloodstalkers have the Life Drain stunt. ";
	critter[12] = "Toxic Zombies are slow, shambling monsters who were once human. \n\nToxic zombies have -1 Reflexes and always lose initiative.";
	critter[13] = "Rad Dogs are mangy, diseased critters that hunt in packs. \n\nRad Dogs have the Rad Screen stunt. They suffer self-inflicted 1 Stress Point damage each turn.";
	critter[14] = "Atomic Scorpions are giant sized arachnids with stinging tails and nasty claws. \n\nAtomic Scorpions get an extra attack with their tails (see the Head Butt stunt) at +2 damage. ";
	critter[15] = "Psi Roaches are roaches that have developed psionic abilities. \n\nAll Psi Roaches have the bug equivalent of the Psi-Blade stunt.";
	critter[16] = "Giant Radioactive Lizards are big mean lizards found in the Atomic Wastelands. \n\nGiant Radioactive Lizards have two times normal (2-12) Stress Points. They glow in the dark.";
	critter[17] = "Killer Mutant Turkeys are savage, ill tempered, flightless birds. \n\nThe highest level turkey has the Charge stunt.";
	critter[18] = "Primitive scavengers are people who have left all traces of civilisation behind. \n\nPrimitive Scavengers only have close combat attacks. The highest level critter is a shaman has the Psychic Storm stunt.";
	critter[19] = "Monster Bats are sinister, flying predators. \n\nMonster Bats can make one sonic screech attack each (Area attack like a grenade).";
	critter[20] = "The Motomaniacs are a gang of cyborg bikers. Some of them are permanently attached to their bikes. \n\nAll cyborgs have the have the Psi Immunity stunt.";
	critter[21] = "Rogue Bounty Hunters are bounty hunters who have crossed the line and given up on the code.\n\nDefeating a band of rogue Bounty Hunters will unveil a clue to either an existing bounty being pursued or to a fugitive on/off the road bounty as described in the Road Encounters section of the rulebook.";
	critter[22] = "Highway Pirates are like regular pirates, only drier. \n\nThe highest ranking critter is the captain. The captain has a robotic parrot as in the Animal Companion stunt.";
	critter[23] = "The Peacekeepers are a paramilitary organisation that seeks to restore order by confiscating, by force if necessary, weapons from anyone they consider to be civilians. This is often resisted.\n\nThe highest ranking critter has the Leadership stunt.";

	function generateCritters(){

		var draw = getDraw();
		var sp = "";
		var cr = "";
		var cn = "";
		var num = getCritterNumber();

		var encounter = "Encounter: "+getCritterName(num)+" ("+draw+")\n\n";
		for (var d = 0; d < draw; d++)
		{
			sp = getStressPoints();
			cr = getCritterRating();
			encounter = encounter + "A "+cr+" critter with "+sp+" Stress Points\n";
		}
		encounter = encounter + "\n\n"+getCritterDetails(num);
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
	function getCritterNumber() {
		var namSel = document.getElementById("critterName").selectedIndex;
		if (namSel == 0) {
		namSel = Math.round(Math.random()*23)+1;
		}
		return namSel;
	}

	function getCritterName(n) {
		var cn = "";
		if (document.getElementById("customName").value) {
			cn = document.getElementById("customName").value;
		}else{
			var namOpt = document.getElementById("critterName").options;
			cn = namOpt[n].text;
		}
		return cn;
	}

	function getCritterDetails(n) {
		var cd = "";
		if (document.getElementById("customDetails").value) {
			cd = document.getElementById("customDetails").value;
		}else{
			cd = critter[n];
		}
		return cd;
	}

	function customClear() {
		document.getElementById("customDetails").value = "";
		document.getElementById("customName").value = "";
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
