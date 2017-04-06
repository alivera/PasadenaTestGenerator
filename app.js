var buildings = [
	"S03", "S04","S05","S08","S10","S011","S012","S13","S14","S15"
];

var pickupList = ["pickup1","pickup2","pickup3","pickup4","pickup5","pickup6","pickup7","pickup8","pickup9","pickup10"];
var dropoffList = ["dropoff1","dropoff2","dropoff3","dropoff4","dropoff5","dropoff6","dropoff7","dropoff8","dropoff9","dropoff10"];

function generateTests() {
	//random
	var randomPickup = Math.floor(Math.random() * buildings.length);
	var randomDropoff = Math.floor(Math.random() * buildings.length);
	var randomPickupList = [];
	var randomDropoffList = [];

	//First Row
	randomPickupList[0] = document.getElementById("pickup1").innerHTML= buildings[randomPickup];
	randomDropoffList[0] = document.getElementById("dropoff1").innerHTML= buildings[randomDropoff];

	
	for(var i = 1; i < 10; i++) {
		randomDropoff = Math.floor(Math.random() * buildings.length);
		randomPickupList[i] = document.getElementById(pickupList[i]).innerHTML= randomDropoffList[i-1];
		randomDropoffList[i] = document.getElementById(dropoffList[i]).innerHTML= buildings[randomDropoff];
	}


}