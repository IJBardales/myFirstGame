export class Weapons {
    constructor(weapon){
        this.weapon = weapon;
    }
    attack(){
    let initialWeaponCount = 3;
    return "Remember, you are only given "+ initialWeaponCount +" weapons, use them well!";
    }
}
 
const sword = new Weapons("sword");
console.log(sword.attack());
