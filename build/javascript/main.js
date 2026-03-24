class Coder {
    name;
    music;
    age;
    lang;
    constructor(name, music, age, 
    // default value
    lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
// public -> can be accesed everywhere
// private -> can only be accesed inside this class
// protected -> can be accesed in the class or in subclasses
const Anna = new Coder('Anna', 'Rock', 28);
// age = private -> still valid JS code so it we be printed to the console
//console.log(Anna.age);
// Webdev as a subclass for Coder class
class Webdev extends Coder {
    computer;
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    // cause its protected we can access lang here inside the subclass
    getLang() {
        return this.lang;
    }
}
const Yasemin = new Webdev('Lenovo', 'Yasemin', 'EDM', 28);
console.log(Yasemin.getLang());
export {};
//# sourceMappingURL=main.js.map