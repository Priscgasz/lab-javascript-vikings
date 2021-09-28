// Soldier
class Soldier {
constructor(health, strength){
  this.health = health;
  this.strength = strength;
}

attack() {
  return this.strength;
}

receiveDamage(damage) {
  this.health -= damage; 
}
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
  super(health, strength); 
  this.name = name;
  }  

receiveDamage(newDamage) {
  this.health -= newDamage; 
  if (this.health > 0 ){ 
    return `${this.name} has received ${newDamage} points of damage`
    } else { 
  return `${this.name} has died in act of combat`
    }
  }
battlecry() {
  return "Odin Owns You All!"
  }
}


// Saxon
class Saxon extends Soldier {
  constructor(health, strength)


receiveDamage(newDamage2){
  this.health -= newDamage2;
  if (this.health > 0 ){ 
    return `A saxon has received ${newDamage2} points of damage`
    } else { 
  return 'A saxon has died in act of combat'
    }
}
}

// War
class War {
  constructor() {
  this.vikingArmy= [] 
  this.saxonArmy= []  
  }

  addViking(viking){
    vikingArmy.push(viking)
  }

  addSaxon(saxon){
    saxonArmy.push(saxon)
  }
  vikingAttack(){
    const randomViking = vikingArmy [Math.floor(Math.random()* vikingArmy.length)];
    const randomSaxon = saxonArmy [Math.floor(Math.random()* saxonArmy.length)]; 
    receiveDamage(randomSaxon.newDamage2 === randomViking.strength); 
    return receiveDamage()
  }

  saxonAttack()
  showStatus()

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
