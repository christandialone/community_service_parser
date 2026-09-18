"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greeting = "Greeting!";
const request = {
    class: "Insufficient Water Supply",
    place: "Nyanya",
    building: "EFKO Mall",
    complainer: "Early Code Institute"
};
// Request Parsed
// --------------
// class: Insufficient Water Supply
// place: Nyanya
// building: EFKO Mall
// complainer: Early Code Institute
function requestParser(request) {
    console.log("\n");
    console.log("Request Parsed");
    console.log("------------------------");
    console.log("class: ", request.class);
    console.log("place: ", request.place);
    console.log("buildiing: ", request.building);
    console.log("complainer: ", request.complainer);
    console.log("\n");
}
requestParser(request);
//# sourceMappingURL=community_service_parser.js.map