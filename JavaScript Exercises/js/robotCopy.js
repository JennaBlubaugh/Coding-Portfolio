



//it needs a main menu that cycles through twice
//The main menu need to look for either 1,2,3, or Exit
//If any of these things are not said, that is what repeats the loop ONE MORE TIME
//It asks the user again, then if they say nothing, it stops.
//It needs to be a prompt, and expect either a number or a string, that being the word 'Exit'
//Can I look for a number specifically? I can define them as cases since it is a set amount of choices



var flag = true;

do{
var userMenuInput = prompt("Please enter either 1, 2, 3, or Exit");

switch(userMenuInput){
    case "1":

    //Variable is assigned as the prompt, if user enters nothing
    //It asks them again, but if they do nothing it goes back
    //to menu!
    var userStringInput = prompt("Please enter a string.");
    if(userStringInput.length == 0){
        console.log("You need to enter something.")
        var userStringInput = prompt("Please enter a string.");
    }else
    //else means if user actually enters string, go back to main menu


    //don't touch continue
    continue;

    case "2":
        if(userStringInput == null){
            //null works here!! Hooray!
            //null means it has no value and doesn't exist, can't put || == 0 here
            console.log("You need to first enter a string");
        }else if (userStringInput == 0){
            //works with null
            console.log("You need to first enter a string");
        }else{
            //This is program two, I didn't want to make it
            //a function
            var robotLang = userStringInput.split(" ");

            for (let i = 0; i<robotLang.length; i++){
                //cycles through each word, checks length

                if(robotLang[i].length<5){
                    robotLang[i]= robotLang[i] + "-bink";

                }else if(robotLang[i].length>=5){
                    robotLang[i]= robotLang[i] + "-bonk";
                }

            }
            //userStringInput = robotLang.join(" ");
                //console.log(userStringInput);
                //The outputted string needs to go in three
            console.log("String converted");
        }

        //don't touch continue
        continue;

    case "3":
        //standard procedure that brings user back to main menu
        if(userStringInput == null){
            console.log("You need to first convert your string");
        }else if (userStringInput == 0){
            console.log("You need to first convert your string");
        }else{
            userStringInput = robotLang.join(" ");
                console.log(userStringInput);
        }


    //don't touch continue
    continue;
    //ALL IT NEEDED WAS A CONTINUE
    //IT WORKS.  THE MENU WORKS

    case "Exit":
        console.log("Thanks for using the ROBOT Language Converter!");
        flag = false;
        break;
        //okay this works
        //Stops code

        //for default, if nothing is entered, it cycles through
        //one more time
        default:
            prompt("Please enter either 1, 2, 3, or Exit");
}

flag = false;
//praise God it works
//flag being false stops menu after two cycles of nothing

}while (flag==true)
//DON'T TOUCH THE MENU (This is to myself)


//Down here are my notes, I'm leaving them detached so that it won't clutter up the code



//1.  User enters a string, if no string is entered, ask them again with a prompt.  Log the string,
//This starts off with a prompt.  Needs to ask the user what string they want to say; can be anything
//The program needs to log this string, and hold onto it.
//Then, after string is entered, return user back to the loop, starting fresh
//back to main menu


//2.  If string was entered, say that you clocked it or whatever, if no string was entered, be like hey you didn't enter it
//This will be the process, but the console will only say that it has converted it.
//I maybe need to check if something is a string.  If not, be like "this is not a string", and bring back (or that they didn't enter one)
//There needs to be a function, either here or 3 that converts it
//The robot langauge is where if the word is more than five letters,
//add '-bonk', less, add '-bink'.  This means I need to check words in the string
//rather than characters.  Maybe by separating the string, it separates it
//into its individual words, which then can be taken and counted.
//0,1,2,3,4 - would be five letters since it starts at zero


//3.  Here is your string | You need to convert it first
//should say string, and head back to main menu
//noting entered? You need to first convert the string


//it needs to have an exit that STOPS THE LOOP
//Exit must be 'Exit', can't be lowercase or uppercase
//done!