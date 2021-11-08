const {SHIP} = require("./index.js")

const federation = {
    Enterprise : new SHIP("Enterprise","Federation",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:6,Damage:40,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:50,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Voyager : new SHIP("Voyager","Federation",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:15,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:30,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:35,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Discovery : new SHIP("Discovery","Federation",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:15,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:20,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:60,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Dauntless : new SHIP("Dauntless","Federation",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:30,Sound:"TSHWOOO"},Torpedo:{Charge:0,Damage:0,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:80,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Nexus : new SHIP("Nexus","Federation",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:2,Damage:80,Sound:"ZWWWOPPPH"},Special:{Charge:0, Damage:0,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Sovereign : new SHIP("Sovereign","Federation",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:25,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:40,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Olympic : new SHIP("Olympic","Federation",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:6,Damage:40,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:50,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Armstrong : new SHIP("Armstrong","Federation",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:15,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:30,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:35,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Defiant : new SHIP("Defiant","Federation",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:15,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:20,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:60,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Mekong : new SHIP("Mekong","Federation",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:30,Sound:"TSHWOOO"},Torpedo:{Charge:0,Damage:0,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:80,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Equinox : new SHIP("Equinox","Federation",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:2,Damage:80,Sound:"ZWWWOPPPH"},Special:{Charge:0, Damage:0,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Aracheon : new SHIP("Aracheon","Federation",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:25,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:40,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
}
const klingon = {
     Vornak: new SHIP("Vornak","Klingon",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:6,Damage:40,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:50,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
     Bortas: new SHIP("Bortas","Klingon",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:15,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:30,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:35,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
     Chatang: new SHIP("Chatang","Klingon",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:15,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:20,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:60,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
     Heghta: new SHIP("Heghta","Klingon",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:30,Sound:"TSHWOOO"},Torpedo:{Charge:0,Damage:0,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:80,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
     Kitang: new SHIP("Kitang","Klingon",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:2,Damage:80,Sound:"ZWWWOPPPH"},Special:{Charge:0, Damage:0,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
     Partok: new SHIP("Partok","Klingon",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:25,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:40,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
     Somraw: new SHIP("Somraw","Klingon",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:6,Damage:40,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:50,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
     Ursva: new SHIP("Ursva","Klingon",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:15,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:30,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:35,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
     Yavang: new SHIP("Yavang","Klingon",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:15,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:20,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:60,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
     Tohkant: new SHIP("Tohkant","Klingon",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:30,Sound:"TSHWOOO"},Torpedo:{Charge:0,Damage:0,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:80,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
     Silvin: new SHIP("Silvin","Klingon",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:2,Damage:80,Sound:"ZWWWOPPPH"},Special:{Charge:0, Damage:0,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
     Klothos : new SHIP("Klothos","Klingon",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:25,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:40,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
}
const romulan = {
    Devoras : new SHIP("Devoras","Romulan",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:6,Damage:40,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:50,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Koderex : new SHIP("Koderex","Romulan",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:15,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:30,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:35,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Scimitar : new SHIP("Scimitar","Romulan",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:15,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:20,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:60,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Talvath : new SHIP("Talvath","Romulan",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:30,Sound:"TSHWOOO"},Torpedo:{Charge:0,Damage:0,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:80,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Terix : new SHIP("Terix","Romulan",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:2,Damage:80,Sound:"ZWWWOPPPH"},Special:{Charge:0, Damage:0,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Valdore : new SHIP("Valdore","Romulan",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:25,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:40,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Shaenor : new SHIP("Shaenor","Romulan",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:6,Damage:40,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:50,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Narada : new SHIP("Narada","Romulan",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:15,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:30,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:35,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Genorex : new SHIP("Genorex","Romulan",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:15,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:20,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:60,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Dividices : new SHIP("Dividices","Romulan",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:30,Sound:"TSHWOOO"},Torpedo:{Charge:0,Damage:0,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:80,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Belak : new SHIP("Belak","Romulan",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:2,Damage:80,Sound:"ZWWWOPPPH"},Special:{Charge:0, Damage:0,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
    Decius : new SHIP("Decius","Romulan",{hullIntegrity:100,Sound:"EXPLOSION!"},{shieldIntegrity:100,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:20,Sound:"TSHWOOO"},Torpedo:{Charge:10,Damage:25,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:40,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
}
const borg = {
    Cube461 : new SHIP("Cube461","Borg",{hullIntegrity:500,Sound:"EXPLOSION!"},{shieldIntegrity:500,Sound:"BUZZZZ"},{Phaser:{Charge:100,Damage:60,Sound:"TSHWOOO"},Torpedo:{Charge:20,Damage:40,Sound:"ZWWWOPPPH"},Special:{Charge:1, Damage:100,Sound:"ZZZZZSHHHHHHHBOOOOMMMMHHHHH"}}),
}

    module.exports = {federation,klingon,romulan,borg}