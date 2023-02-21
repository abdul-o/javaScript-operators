

let scienceSubject = "Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let artSubjects = "Government, Economics, Literature, History";
let generalSubjects = "English, Mathematics";

let bolatitoGroup = "science";

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
