class Fighter {    
    constructor (object) {
        this._wins = 0;
        this. _losses = 0;
        this._name = object.name;
        this._damage = object.damage;
        this._hp = object.hp;
        this._MAX_HEALTH = object.hp;
        this._agility = object.agility;
    }
    get getName() {
        return this._name;
    }
    get getDamage () {
        return this._damage;
    } 
    get getAgility () {
        return this._agility;
    }
    get getHealth () {
        return this._hp;
    }

    dealDamage (amountOfDamage) {
        const MIN_HEALTH_VALUE = 0;
        this.getHealth -= amountOfDamage;
        if (this.getHealth < MIN_HEALTH_VALUE) {
            this.getHealth = MIN_HEALTH_VALUE;
        }
    }
    heal (amountOfHeal) {
        if (amountOfHeal > this._MAX_HEALTH) {
            this.getHealth = this._MAX_HEALTH;

        } else {
            this.getHealth += amountOfHeal;
        }
    }
    logCombatHistory () {
        console.log(`Name: ${this.getName}, Wins: ${this._wins}, Losses: ${this._losses}`);
    }
    addWin () {
        this._wins++;
    }
    addLoss () {
        this._losses++;
    }
    attack (fighterName) {
        const MAX_CHANCE_OF_ATTACK = 100;        
        let chanceOfAttack = MAX_CHANCE_OF_ATTACK - fighterName.getAgility;
        let hit = Math.floor(Math.random() * MAX_CHANCE_OF_ATTACK) + 1;
        let hitTheTarget = hit < chanceOfAttack; 
        if (hitTheTarget) {
            fighterName.dealDamage(this.getDamage);
            console.log(`${this.getName} make ${this.getDamage} damage to ${fighterName.getName}`);   
        } else {
            console.log(`${fighterName.getName} attack missed`)
        }        
    }
    isDead () {
        return this.getHealth <= 0;    
    }
}

function battle (firstFighter, secondFighter) {    
    if (firstFighter.isDead()) {
        console.log(`${firstFighter.getName} is dead and can't fight.`);
    } else if (secondFighter.isDead()) {
        console.log(`${secondFighter.getName} is dead and can't fight.`);
    } else {
        while (!firstFighter.isDead() && !secondFighter.isDead()) {
            firstFighter.attack(secondFighter);
            if (!secondFighter.isDead()) { 
                secondFighter.attack(firstFighter);
            }
        }
        if (firstFighter.isDead()) {
            firstFighter.addLoss();
            secondFighter.addWin();
        } else {
            firstFighter.addWin();
            secondFighter.addLoss();        
        }
    }
}