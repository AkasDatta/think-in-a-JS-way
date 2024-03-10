// We take the word scope to be the world.
// In JavaScript, the parent passes everything to its child. But the child cannot give anything from his world to the parent.


"use strict" // Using the use strict shows if I've made a mistake or missed something in the code.



var x = 23; //this x mean window.x

/*

// Parent's World
function myFunc(){
    // child's world
    var y =10;
    console.log(`${x} from myFunc()`);
}

*/


/*

// The child can also modify the parent's value if desired.
function myFunc(){
    x = 10;
    console.log(`${x} from myFunc()`);
}

*/

function myFunc(){
    var x = 10; // It's mean i create a new variable
    console.log(`${x} from myFunc()`);
}

myFunc();


console.log(x);
//we can call this "console.log(window.x)";



// Introduction: we always try not config the name. If have to config we can this error find "use strict". 
