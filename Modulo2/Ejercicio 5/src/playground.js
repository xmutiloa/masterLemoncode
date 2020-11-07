class SlothMachine {
    constructor() {
        this.coins = 1;
    }

    play() {
        const random_boolean_1 = Math.random() >= 0.5;
        const random_boolean_2 = Math.random() >= 0.5;
        const random_boolean_3 = Math.random() >= 0.5;

        if(random_boolean_1 && random_boolean_2 && random_boolean_3){
            console.log("Congratulations!!!. You won " + this.coins + " coins!!");
            this.coins = 1;
        }
        else{
            console.log("Good luck next time!! Coins acumulated: " + this.coins);
            this.coins += 1;
        }
    }
}

const machine1 = new SlothMachine();

machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();