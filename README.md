## Star Trek Battle Game

Using Object Oriented Programming implement a Star Trek battle game!

The game will have users (ADMIRALS), types (RACE) who have characters (SHIPS), to deploy in battle against each other in war.

## Step 1

Create my SHIPS, ADMIRALS and the battle function.  

## SHIPS

- COMPLETE - Each SHIP should have a DESIGNATION (name), HULL INTEGRITY (health), SHIELD STRENGTH (to limit weapon damage), WEAPON DAMAGE and the SOUND it's weapons make.

- COMPLETE - Each SHIP has a RACE (type) - leading to a strength or weakness. 

- COMPLETE - Create FEDERATION, KLINGON, ROMULAN and BORG SHIPS.
    - FEDERATION strong against KLINGON, weak against ROMULAN
    - KLINGON strong against ROMULAN, weak against FEDERATION.
    - ROMULAN strong against FEDERATION, weak against KLINGON.
    - BORG strong against ALL, weak against none. - 1 SHIP.

- COMPLETE - Every SHIP should have an attack method available, which returns its WEAPON attack.
-   COMPLETE - Every SHIP should have a weaponSound which returns its weapon sound.
- COMPLETE - Every SHIP should have a damageSound method available, which returns either a shield damage sound or a hull damage sound.
- COMPLETE - SHIPS should have three weapons, stored in an array. 
    - a weak (low attack damage) weapon can be fired many times.
    - a medium (attack damage) weapon can be fire a few times.
    - a special (attack damage) weapon can be fired only once per Admiral. 
- COMPLETE - Implement a critical hit, that randomly awards SHIPS triple damage attack.

## ADMIRALS
- COMPLETE - ADMIRALS have a name, select up to 6 SHIPS and can chose which SHIP to call upon for each battle.
- COMPLETE - An ADMIRAL needs to choose their race before accessing SHIPS to use in their fleet. 
- COMPLETE - An ADMIRAL can only choose and hold 6 SHIPS. 
- ADMIRALS can change SHIPS mid battle. This should end the ADMIRALS turn. 

## Battle
- Finally, you will need a way to battle other ADMIRALS. 
- COMPLETE - The battle should take two ADMIRALS and the SHIPS they wish to battle. 
- The battle should have a fight method available. This should take the SHIP whose turn it is, attack the defending SHIP (deducting attacker's attack damage from the defender's hit points), and end their turn. 
- The fight method should take each SHIP's strengths and weaknesses into account. If a defender is strong against the attacking type, the attacking type's damage should be multiplied by 0.75. If a defender is weak against the attacking type, the attacking type's damage should be multiplied by 1.25. 
- Each attack should be followed by an attack message. The message will vary depending on the defender's weakness/strength. 
- If the defending SHIP is destroyed (reaches 0 HULL INTEGRITY), the attacker wins and new SHIPS are called until one ADMIRAL has no SHIPS remaining (being the victor)

## Making the game
Once you have all the necessary parts fully tested, make the game! 

Using the [inquirer library](https://github.com/SBoudrias/Inquirer.js), build a command line application to play your SHIP battle game. The game should be played using inputs and selections. 

