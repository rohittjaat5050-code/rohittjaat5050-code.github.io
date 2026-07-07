// ===============================
// SNAPSPY DASHBOARD V7
// ===============================

// Username Load
const savedUser = localStorage.getItem("snapspyUser");

const userTitle = document.getElementById("username");
const userCard = document.getElementById("userNameText");

if (savedUser) {
    userTitle.textContent = savedUser;
    userCard.textContent = savedUser;
} else {
    userTitle.textContent = "Unknown User";
    userCard.textContent = "Unknown User";
}

// Live Terminal Animation
const terminal = document.getElementById("terminal");

if (terminal) {

const logs = [

"> Connecting to SnapSpy Server...",
"> Authentication Successful",
"> AI Engine Loaded",
"> Scanning User Profile...",
"> Firewall Status : ACTIVE",
"> Encryption : ENABLED",
"> Connection : SECURE",
"> Scan Completed Successfully"

];

terminal.textContent = "";

let index = 0;

function typeLine() {

if(index < logs.length){

terminal.textContent += logs[index] + "\n";

index++;

setTimeout(typeLine,700);

}

}

typeLine();

}