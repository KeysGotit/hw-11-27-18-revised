class Monster {
    constructor(typeofmonster, strength, name) {
        this._typeofmonster = typeofmonster;
        this._strength = strength;
        this._name = name;
    }
        get typeofmonster() {
            return this._typeofmonster;
        }
        get strength() {
            return this._strength;
        }
        get name() {   
            return this._name
        }

        getattacked() {
            this._strength -=4;
            console.log("A Monster Attacked You");
        }
    }
        let monster1 = new Monster("bigbear",49,"BigFoot");
        let monster2 = new Monster("dragon",76,"Godzilla");

        
            console.log(monster1._typeofmonster,monster1._strength,monster1._name);
            monster2.getattacked();
            console.log(monster2._name,monster2._strength);

        class evolvedMonster extends Monster {

            constructor(typeofmonster,strength,name, speed, weapon) {
                super(typeofmonster,strength,name);
                this._speed = speed;
                this._weapon = weapon;
            }
        
        }
            let scary1 = new evolvedMonster("Water", 55, "LochNess", 46, "TidalWave");
            let scary2 = new evolvedMonster("Giant", 32, "Cyclops", 12, "Hammer");
        
        console.log(scary1._name,scary1._weapon,scary1._speed);
        scary2.getattacked();
        console.log(scary2._name,scary2._weapon,scary2._strength);