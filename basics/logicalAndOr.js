let temp = 55

if (temp >= 60 && temp <=84) {
    console.log("SO nice outside!")
} else if(temp <= 0 || temp >= 110) {
    console.log("Don't go outside!")
} else {
    console.log("It's all good. Do whatevs!")
}



let isGuestOneVegan = true
let isGuestTwoVegan = true

// Are both vegan? Only offer vegan dishes
if(isGuestOneVegan && isGuestTwoVegan) {
    console.log("Hey you vegans - here are the vegan dishes!")
} else if(isGuestOneVegan || isGuestTwoVegan) {
    console.log("We got yer vegan and non-vegan dished right here!")
} else {
    console.log("Here's our whole menu!")
}
// At least one guest vegan? Offer vegan and non-vegan options
// Else, offer anything on the menu
