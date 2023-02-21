

// QUESTION THREE (3)

let scienceSubject = "Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let artSubjects = "Government, Economics, Literature, History";
let generalSubjects = "English, Mathematics";

let bolatitoGroup = "art";



// possible subject for Bolatito to take are ( ANSWERS TO QUESTION THREEE)

if (bolatitoGroup === "science" ){

    console.log( "Your subjects are " +  scienceSubject);
}
else if(bolatitoGroup === "social science") {
    console.log("Your subjects are " + socialScienceSubjects)
}
else if( bolatitoGroup === "art") {
    console.log( "Your subjects are " +  artSubjects)
} 
else {
    console.log(generalSubjects);
};




// QUESTION 4 (4), "What is the result when the following program is executed?"//

for ( let i=1; i < 20; i += 7){
    console.log(i);
};

/* The answer to this above code are :
   
     1, 8, and 15     
     
*/