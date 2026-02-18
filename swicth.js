//Switch case:

const color = "Green";

//This switch case is wrong:
// switch (color) {
//     case "Red":
//         console.log("OK, This is Red");
//     case "Green":
//         console.log("OK, This is Green");
//     case "Blue":
//         console.log("OK, This is Blue");
//     default:
//         console.log("Invalid");
// };


// This switch case is right:
// switch (color) {
//     case "Red":
//         console.log("OK, This is Red");
//         break;
//     case "Green":
//         console.log("OK, This is Green");
//         break;
//     case "Blue":
//         console.log("OK, This is Blue");
//         break;
//     default:
//         console.log("Invalid");
// };



const role = {
    admin: "admin",
    user: "user",
    moderator: "moderator"
}
let page;

switch (role.HeroAlom) {
    case role.user:
        page = "Please, permit me, I am a user of this page";
        break;
    case role.moderator:
        page = "Please, permit me, I am a moderator of this page";
        break;
    case role.admin:
        page = "I am Admin in this page";
        break;

    default:
        page = "Not permitted for you ";
        break;
}
console.log(page);



