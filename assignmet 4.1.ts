/*
Create a Class with name ‘Greeter’ in greeter.ts and define Constructor and one
‘greet()’ method which will return some greeting message, then create a
greeter.html, add compiled file into this html like(greeter.js). Output should
display as greeting message. 
*/

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);


/*
Create Interfaces and Class for implement them.
Interface: A simple interface that defines the interface for something that can
drive.
Class: An implementation of a car.
interface Drivable {}, with start(), drive() and getPosition()
class Car implements Drivable {}
*/

module Example {
    interface Vehicle {
        numWheels: number,
        numHeadlights: number,
        start: ()=>void,
        go : (speed : number)=>void,
        stop: ()=> void,
        hasRearcamera?: boolean
    }

    var myCar: Vehicle = {
        numWheels: 4,
        numHeadlights: 2,
        start: function() {
            console.log("Engine Started");
        },

        go: function (speed: number){
            console.log("can go at", speed, "mph");
        },

        stop: function(){
            console.log("Engine Stopped");
        }
        
    }

    myCar.start();
    myCar.go(65);
    myCar.stop();
}


