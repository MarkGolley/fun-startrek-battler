



class SHIP {
    constructor(designation, race,hull, shield, weaponsAndDamage) {
        this.designation = designation;
        this.race = race;
        this.hull = hull;
        this.shield = shield;
        this.weaponsAndDamage = weaponsAndDamage;
        this.strength = strength[race];
        this.weakness = weakness[race];
    }
    attack(weapons){
        const weaponToFire = weapons.Phaser //need to figure out how to choose the weapon to fire
        if (weaponToFire.Charge > 0){
        this.weaponsAndDamage.Phaser["Charge"] -= 1;
            this.sound(this.weaponsAndDamage.Phaser.Sound)
            return this.weaponsAndDamage.Phaser.Damage
        }
        else {
            return "This weapon has no charge left, choose another WEAPON or a new SHIP"
        }
        }
    sound(soundToMake) {
        return soundToMake
        }
    damage(attackDamage){
        if (Math.floor(Math.random() * 100) > 94){
            attackDamage*= 3;
        }
        if (this.shield.shieldIntegrity > attackDamage){
            this.shield.shieldIntegrity -= attackDamage;
            return this.shield.Sound
        } else {
            this.shield.shieldIntegrity = 0;
            console.log("Shields have collapsed!");
            this.hull.hullIntegrity -= attackDamage;
            return this.hull.Sound;
        }
    }
}
const strength = {Federation:"Klingon", Klingon:"Romulan", Romulan:"Federation", Borg:"All"};
const weakness = {Federation:"Romulan", Klingon:"Federation",Romulan:"Klingon",Borg:"None"};

class ADMIRAL {
    constructor(name,fleet = []) {
        this.name = name;
        this.fleet = fleet;
        this.race = "";
    }
    chooseRace(raceInput) {
        this.race = raceInput
        console.log(`${this.name}'s race was set to "${raceInput}"`)
    }
    addSHIPS(SHIPChoice) {
        if (this.fleet.length < 6){
            this.fleet.push(SHIPChoice)
            console.log(`${SHIPChoice} was added to ${this.name}'s fleet'`)
        } else {
            console.log(`Sorry!${this.name}'s fleet is already full!`);
            return `Sorry!${this.name}'s fleet is already full!`;
        }
    }
}

class BATTLE {
    constructor(user1,user1SHIP,user2,user2SHIP) {
        this.admiral1Name = user1;
        this.admiral1SHIP = user1SHIP;
        this.admiral2Name = user2;
        this.admiral2SHIP = user2SHIP;

        for (let i = 0; i < 10; i++){
            if (i % 2 === 0){
                this.fight(this.admiral1SHIP,this.admiral2SHIP)
            }
            else {
                this.fight(this.admiral2SHIP,this.admiral1SHIP)
            }
        }
    }
    fight(attacker,defender) {
        this.attacker = attacker;
        this.defender = defender;
        const attack = this.attacker.attack(attacker.weaponsAndDamage)
        if (typeof attack === "number") {
            defender.damage(attack)
        }
        else {
            console.log(attack);
            return attack;
        }
    }
}

module.exports = {SHIP,ADMIRAL,BATTLE};
