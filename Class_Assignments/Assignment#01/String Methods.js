/**JavaScript String Length*/
let Intro="I'm Rafia Batool, FA21-BSE-056, a student of Software Engineering studying at COMSATS University Attock Campus.";
let length= Intro.length;
console.log(length);

/**Three methods for Extracting String Characters */
/**1. JavaScript String charAt()*/
let Hello="Hello Rafia";
let char=Hello.charAt(6);
console.log(char);

/**2. JavaScript String charCodeAt() */
let Bye="Bye Rafia";
let charCode=Bye.charCodeAt(7);
console.log(charCode);

/**3. JavaScript String at() */
let Hi="Hi Rafia";
let at=Hi.at(5);
console.log(at);

let att=Hi[6];
console.log(att);

/**Property Access [ ] */
console.log(Hi[1]);

/**JavaScript String slice() */
let color = "Red, Blue, Green";
let part = color.slice(5, 9);
console.log(part)
/**If you omit the second parameter, the method will slice out the rest of the string */
let portion=color.slice(12);
console.log(portion);
/**If a parameter is negative, the position is counted from the end of the string */
let position=color.slice(-3);
console.log(position);

/**JavaScript String substring() */
let fruits = "Apple, Banana, Kiwi";
let taste = fruits.substring(7, 13);
console.log(taste);

/**JavaScript String toUpperCase() */
let Mood="happy";
let happy=Mood.toUpperCase();
console.log(happy);

/**JavaScript String toLowerCase() */
let Sky="CLOUD";
let cloud=Sky.toLowerCase();
console.log(cloud);

/**JavaScript String concat() */
let me="I'm";
let good="good.";
let howAreYou=me.concat(' ',good);
console.log(howAreYou);

/**JavaScript String trim() */
let Star1="      Sun and Moon    ";
let Star2=Star1.trim();
console.log(Star2);

/**JavaScript String padStart() */
let a = "A";
let padded = a.padStart(5,"B");
console.log(padded);

/**JavaScript String padEnd() */
let c = "C";
let padding = c.padEnd(4,"D");
console.log(padding);

/**JavaScript String repeat() */
let Black = "Black Hole ";
let hole = Black.repeat(2);
console.log(hole);

/**Replacing String Content */
let Galaxy1 = "I'm Milky Way";
console.log(Galaxy1)
let Galaxy2 = Galaxy1.replace("Milky Way", "Andromeda");
console.log(Galaxy2);

/**JavaScript String split() */
let Universe1="Universe,is,eternity";
let Universe2="Universe is eternity";
let Universe3="Universe|is|eternity";
let BigBang1=Universe1.split(',')    // Split on commas
let BigBang2=Universe2.split(" ")    // Split on spaces
let BigBang3=Universe3.split("|")    // Split on pipe
console.log(BigBang1);
console.log(BigBang2);
console.log(BigBang3);






