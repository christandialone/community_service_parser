const greeting = "Greeting!"
// console.log(greeting)


// Community service request

type CommunityRequest = {
    class: string,
    place: string,
    building: string,
    complainer: string | string[]
}

const request: CommunityRequest = {
    class: "Insufficient Water Supply",
    place: "Nyanya",
    building: "EFKO Mall",
    complainer: "Early Code Institute"
}


// Request Parsed
// --------------
// class: Insufficient Water Supply
// place: Nyanya
// building: EFKO Mall
// complainer: Early Code Institute


function requestParser(request: CommunityRequest){
    console.log("\n")
    console.log("Request Parsed")
    console.log("------------------------")
    console.log("class: ", request.class)
    console.log("place: ", request.place)
    console.log("buildiing: ", request.building)
    console.log("complainer: ", request.complainer)
    console.log("\n")
}

requestParser(request)