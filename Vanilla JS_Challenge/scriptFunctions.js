console.log("Hello my name is SSUM");
console.log("Hello my name is Dal");
console.log("Hello my name is Fly");
console.log("Hello my name is JUNN");
console.log("Hello my name is ZOOM");
console.log("Hello my name is Siya");

function sayHello(){
    console.log("Hello!")
}

sayHello();
sayHello();
sayHello();
sayHello();

function sayYaho(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson+ "and I'm" + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(a, b){
    console.log(a+b);
}

plus(8, 60);

const player = {
    name: "nico",
    sayHello: function (otherPersonsName){
        console.log("hello"+otherPersonsName+"nice to meet you")
    },
};

player.sayHello("lynn");
player.sayHello("nico");