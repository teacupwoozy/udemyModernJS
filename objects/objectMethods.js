let restaurant = {
    name: "Spinasse",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    // seatParty (adds party size to be seated and adds to guestCount)
    seatParty: function(partySize){
        this.guestCount = this.guestCount + partySize
    },
    // removeParty (takes party size leaving and removes from guestCount)
    removeParty: function(partySize){
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))