const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Get time and date",
          "Remind me",
          "Exit"
        ]
      }
    ];
    this.contacts = [];
  }

  main(){
    console.log(`Welcome to AddressBloc!`);
     inquirer.prompt(this.mainMenuQuestions).then((response) => {
       switch(response.mainMenuChoice){
         case "Add new contact":
           this.addContact();
           break;
         case "Get time and date":
           this.getDate();
           break;
        case "Remind me":
          console.log(this.remindMe());
          break;
         case "Exit":
           this.exit();
         default:
           console.log("Invalid input");
           this.main();
       }
     })
     .catch((err) => {
       console.log(err);
     });
  }

  clear(){
    console.log("\x1Bc");
  }

  addContact(){
     this.clear();
     console.log('addContact called');
     this.main();
   }

   getDate(){
     this.clear();
     var currentDate = new Date(Date.now());
     console.log("The current time is " + currentDate.toLocaleString());
     this.main();

   }

   getContactCount(){
    return this.contacts.length;
   }

   remindMe(){
    return "Learning is a life-long pursuit";
   }

   exit(){
     console.log("Thanks for using AddressBloc!");
     process.exit();
   }
}
