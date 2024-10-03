// Prompt the user to enter a day of the week
let dayOfWeek = prompt ("Enter a day of the week:").toLowerCase();

switch (dayOfWeek) {
  case 'monday':
    console.log("My task for Monday is: Finish my assignments.");
    break;
  case 'tuesday':
    console.log("My task for Tuesday is: Finalized my assignments and pass it.");
    break;
  case 'wednesday':
    console.log("My task for Wednesday is: Doing my activities.");
    break;
  case 'thursday':
    console.log("My task for Thursday is: Pass my activities.");
    break;
  case 'friday':
    console.log("My task for Friday is: Take notes for our lesson.");
    break;
  case 'saturday':
    console.log("My task for Saturday is: Prepare and learn the next assignments.");
    break;
  case 'sunday':
    console.log("My task for Sunday is: Doing my assignments.");
    break;
    
  default:
    console.log("Invalid day of the week");
    
}
