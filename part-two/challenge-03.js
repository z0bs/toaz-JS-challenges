class Person {
    constructor(name, mass, height) {
        this.name = name;
        this.mass = mass;
        this.height = height;
    }

    calcBMI() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const mark = new Person("Mark Miller", 78, 1.69);
const john = new Person("John Smith", 92, 1.95);

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.name}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.name}'s (${john.bmi.toFixed(1)})!`);
} else {
    console.log(`${john.name}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.name}'s (${mark.bmi.toFixed(1)})!`);
}