class Coder {
    constructor(
        public readonly name: string, 
        public music: string, 
        private age: number, 
        // default value
        protected lang: string = 'Typescript' 
    ) {
        // Using access modifiers in the constructor automatically:
        // - creates the properties
        // - assigns the values
        // So we DON'T need to manually write:
        /*
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
        */
    }
    public getAge() {
        return this.age;
    }
}
// public -> can be accesed everywhere
// private -> can only be accesed inside this class
// protected -> can be accesed in the class or in subclasses

const Anna = new Coder('Anna' ,'Rock' , 28);

// age = private -> still valid JS code so it we be printed to the console
//console.log(Anna.age);

// Webdev extends Coder -> inherits all properties and methods
// "is-a" relationship: Webdev is also a Coder
// Must call super() with all required constructor arguments of Coder
// All required parameters of the parent constructor must be passed to super()
// ----> (except parameters with default values)
// methods from the parent class are inherited and can be used in the child class
class Webdev extends Coder {
   constructor(
    public computer: string,
    name: string,
    music: string,
    age: number,
    ) {
    super(name, music, age)
   }

   // cause its protected we can access lang here inside the subclass
   public getLang() {
    return this.lang
   }
}

const Yasemin = new Webdev('Lenovo' , 'Yasemin' , 'EDM', 28);
console.log(Yasemin.getLang());

//-------------------------------------------------------------------------------------//
//aplying an interface to a class
interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}
// class Guitarist needs to have ever field and function in the implemented interface
class Guitarist implements Musician {
    name: string
    instrument: string;
    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }
    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}
const Page = new Guitarist('Jimmy' , 'Guitar');
console.log(Page.play('cleans'));

//-------------------------------------------------------------------------------------//
// static classmembers
class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count;
    }
    public id: number;

    constructor(public name: string){
        this.name = name
        this.id = ++Peeps.count
    }
}
const Amy = new Peeps('Amy');
const Berta = new Peeps('Berta');
const Chris = new Peeps('Chris');

//-------------------------------------------------------------------------------------//
// getter & setter
class Band {
    private dataSet: string[]

    constructor(){
        this.dataSet = []
    }

    public get data(): string[]{
        return this.dataSet
    }

    public set data(value: string[]){
        if(Array.isArray(value) && value.every(element => typeof element === 'string')){
            this.dataSet = value
            return;
        } else {
            throw new Error('Param is not an array of only strings.')
        }
    }
}