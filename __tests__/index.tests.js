const {federation,klingon,romulan,borg} = require("../ships.js");
const {SHIP,ADMIRAL, BATTLE} = require("../index.js");
const { expect } = require("@jest/globals");

// Main SHIP instance for testing


describe("SHIP Function", () => {

    const Enterprise = new SHIP("Enterprise","Federation",
    {hullIntegrity:100,Sound:"EXPLOSION!"},
    {shieldIntegrity:100,Sound:"BUZZZZ"},{
        Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},
        Torpedo:{Charge:6,Damage:40,Sound:"ZWWWOPPPH"},
        Special:{Charge:1, Damage:50,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}});

    it("SHIP CLASS creates a SHIP instance as an object",() => {
        const Enterprise = new SHIP();
        expect(typeof Enterprise).toBe("object");
        expect(Enterprise).toBeInstanceOf(SHIP);
    })
    it("SHIP CLASS has properties aligned to provided parameters",() => {
        expect(Enterprise.designation).toBe("Enterprise");
        expect(Enterprise.hull).toEqual({hullIntegrity:100,Sound:"EXPLOSION!"});
        expect(Enterprise.shield).toEqual({shieldIntegrity:100,Sound:"BUZZZZ"});
        expect(Enterprise.weaponsAndDamage).toEqual({Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:6,Damage:40,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:50,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}});
        expect(Enterprise.race).toBe("Federation");
    })
    it("SHIP CLASS has strength and weakness properties aligned the type parameter",() => {
        expect(Enterprise.race).toBe("Federation");
        expect(Enterprise.strength).toBe("Klingon");
        expect(Enterprise.weakness).toBe("Romulan");
    })
    describe("attack Function", () => {
        it("attack function returns attack damage, deducts charge and returns weapon sound",() => {
        expect(Enterprise.weaponsAndDamage.Phaser.Charge).toBe(100);
        expect(Enterprise.attack(Enterprise.weaponsAndDamage)).toEqual(20);
        expect(Enterprise.weaponsAndDamage.Phaser.Charge).toBe(99);
        })
        it("attack function returns message when weapon charge is empty",() => {
        const Enterprise = new SHIP("Enterprise","Federation",
        {hullIntegrity:100,Sound:"EXPLOSION!"},
        {shieldIntegrity:100,Sound:"BUZZZZ"},{
            Phaser:{Charge:0,Damage:20,Sound:"TSHWOOO"},
            Torpedo:{Charge:6,Damage:40,Sound:"ZWWWOPPPH"},
            Special:{Charge:1, Damage:50,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}});
        expect(Enterprise.weaponsAndDamage.Phaser.Charge).toBe(0);
        expect(Enterprise.attack(Enterprise.weaponsAndDamage)).toEqual("This weapon has no charge left, choose another WEAPON or a new SHIP");
        expect(Enterprise.weaponsAndDamage.Phaser.Charge).toBe(0);
        })
    })
    describe("Damage Function", () => {
        it("SHIP shield updated following attack damage, and sound is returned",() => {
        expect(Enterprise.damage(Enterprise.attack(Enterprise.weaponsAndDamage))).toEqual("BUZZZZ");
        expect(Enterprise.shield.shieldIntegrity).toBe(80)
        })  
        it("SHIP hull updated if shield weaker than attack damage, and sound is returned",() => {
        const Enterprise = new SHIP("Enterprise","Federation",
        {hullIntegrity:100,Sound:"EXPLOSION!"},
        {shieldIntegrity:10,Sound:"BUZZZZ"},{
            Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},
            Torpedo:{Charge:6,Damage:40,Sound:"ZWWWOPPPH"},
            Special:{Charge:1, Damage:50,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}});
        expect(Enterprise.damage(Enterprise.attack(Enterprise.weaponsAndDamage))).toEqual("EXPLOSION!");
        expect(Enterprise.shield.shieldIntegrity).toBe(0)
        expect(Enterprise.hull.hullIntegrity).toBe(80)
        })  
    })
})

//ADMIRAL TESTING

describe("ADMIRAL Function", () => {

    const Mark = new ADMIRAL("Mark");

    it("ADMIRAL CLASS creates a new instance as an object",() => {
        expect(typeof Mark).toBe("object");
        expect(Mark).toBeInstanceOf(ADMIRAL);
    })
    it("ADMIRAL CLASS returns properties from provided parameters",() => {
        expect(Mark.name).toBe("Mark");
        expect(Mark.fleet).toEqual([]);
    })
    describe("addSHIPS Function", () => {
        it("function adds a new SHIP to ADMIRALS fleet",() => {
            const MarkTest = new ADMIRAL("Mark");
            MarkTest.addSHIPS(federation.Aracheon)
            expect(MarkTest.fleet).toEqual([federation.Aracheon]);  
        })
        it("function doesn't add new SHIP to ADMIRALS fleet when fleet is full (6)",() => {
            const MarkTest = new ADMIRAL("Mark");
            MarkTest.addSHIPS(federation.Aracheon);
            MarkTest.addSHIPS(federation.Voyager);
            MarkTest.addSHIPS(federation.Discovery);
            MarkTest.addSHIPS(federation.Dauntless);
            MarkTest.addSHIPS(federation.Nexus);
            MarkTest.addSHIPS(federation.Enterprise);
            MarkTest.addSHIPS(federation.Melbourne);
            expect(MarkTest.fleet).toEqual([federation.Aracheon,federation.Voyager,federation.Discovery,federation.Dauntless,federation.Nexus,federation.Enterprise]);  
        })
    })
    describe("chooseRace Function", () => {
        it("function assigns a chosen RACE to the ADMIRAL",() => {
            Mark.chooseRace("Federation")
            expect(Mark.race).toBe("Federation"); 
        })
    })
})

// BATTLE TESTING

describe("BATTLE Function", () => {
    const Mark = new ADMIRAL("Mark",[federation.Aracheon,federation.Voyager,federation.Discovery,federation.Dauntless,federation.Nexus,federation.Enterprise]);
    Mark.chooseRace("Federation");
    const Ollie = new ADMIRAL("Ollie",[klingon.Vornak,klingon.Bortas,klingon.Vayang,klingon.Chatang,klingon.Kitang,klingon.Somraw]);
    Ollie.chooseRace("Klingon");
    const Battle1 = new BATTLE(Mark.name,Mark.fleet[0],Ollie.name,Ollie.fleet[0]);
    it("BATTLE can take two ADMIRALS and hold them and their chosen SHIPS",() => {
    expect(Battle1.admiral1Name).toEqual("Mark");
    expect(Battle1.admiral2Name).toEqual("Ollie");
    expect(Battle1.admiral1SHIP).toEqual(Mark.fleet[0]);
    expect(Battle1.admiral2SHIP).toEqual(Ollie.fleet[0]);
    })
    describe("fight Function", () => {
        it("Take the attacker ship and the defender ship and hold these.",() => {
        Battle1.fight(Battle1.admiral1SHIP,Battle1.admiral2SHIP);
        expect(Battle1.fight).toEqual(Mark.fleet[0]);
        expect(Battle1.fight.defender).toEqual(Ollie.fleet[0]);
        })
    })
})
