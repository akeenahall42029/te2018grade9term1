
function character(name){

	this.name = name;
	this.weapon;
	this.power;
	this.color;
	this.relationship = false;
	this.getInfo = getCharacter;
}



function getCharacter(){


return this.name + " " + this.weapon + " " + this.color + " " + this.relationship + " " + this.power;
	}

	let shin = new character("Shino Akaname");
	shin.color = "purple"
	shin.power = "bhuddist palm"
	shin.relationship = true;
	shin.weapon = "katana";


let akari = new character("Akari Akaname");
akari.color = "blue";
akari.power = "manifest"
akari.relationship = false;
akari.weapon = "pistol"; 

	console.log(shin.getInfo();
function character (name){

this.name = name;
this.zodiacsign;
this.Skincolor;
this.psycho = true;
this.ability;
this.getInfo = getCharacter;
}

function getCharacter(){

	return this.name + " " + this.zodiacsign + " " + this.Skincolor + "  " + this.psycho + " " + this.ability;


}

var richierich = new character ("richierich");
richierich.zodiacsign = "taurus";
richierich.Skincolor = "brown";
richierich.psycho = true;
richierich.ability = "mind reading + telepathy";

var Bleu = new character ("Bleu");
Bleu.zodiacsign = "virgo";
Bleu.Skincolor = "brown";
Bleu.psycho = false; 
Bleu.ability = "invisability";

let person = {firstName:"taura", gender: "female", age:"17", eyecolor:"green"}



console.log(person.gender);








