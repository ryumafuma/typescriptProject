interface Animals {  name: string;  type: string;  paws: number;  color?: string;}

class Type implements Animals {  name: string;  type: string;  paws: number;  color?: string;
  constructor(animal: Animals) {    this.name = animal.name;    this.type = animal.type;    this.color = animal.color;    this.paws = animal.paws;  }}

class Action extends Type {constructor(animal: Animals){super(animal);}
  photo() {    
    console.log(`You can take a picture of ${this.name}.`);  }  mew() {    
      if (this.type === "cat") console.log(`A ${this.name} can mew`);

    else console.log(`This animal can't mew`);  }  bark() {    
      if (this.type === "dog") console.log(`A ${this.name} can bark.`);

    else console.log(`This animal can't bark`);  }  fly() {    
      if (this.type === "bird") console.log(`A ${this.name} can fly.`);  

    else console.log(`This animal can't fly`);  }  swim() {    
      if (this.type === "fish") console.log(`A ${this.name} can swim.`); 

    else console.log(`This animal can't swim`);  }  cuddle() {    
      if (this.paws === 4)      console.log(`You can cuddle a ${this.name}.`);

    else console.log(`You can't cuddle this animal`);  }  eat() {    
      if(this.color === 'black')       console.log(`You can feed a ${this.name}`); 

    else console.log(`You can't feed ${this.name}`);
  }}

const europeen = new Action({name: 'européen', type:"cat", color: "black", paws: 4});
const chartreux = new Action({name: "Chat Chartreux", type: "cat", paws:4});
const terreNeuve = new Action({name:"Chien Terre-Neuve", type:"dog",paws: 4, color:"black"});
const moonMoon = new Action({name:"Chien Moon Moon", type:"dog",paws: 4});
const mesange = new Action({name:"Merle", type:"bird", paws:2});
const merle = new Action({name:"merle", type:"bird", paws:2, color:"black"});
const tuna = new Action({name:"tuna",type: "fish",paws: 0});
const shark = new Action({name:"shark",type: "fish", paws:0});
const asticot = new Action({name:"asticot",type: "insect",paws: 0});

europeen.photo();
europeen.mew();
europeen.bark();
europeen.fly();
europeen.swim();
europeen.eat();
europeen.cuddle();












