function getTalent() {
    let talent = document.getElementById("Talent").value;
    if (talent == null || talent == "") {
        alert("You did not enter a talent");
    } else {
        alert(`${talent}, Wow what a talent!`);
    }
    // while (talent == null || talent == "") {
    //     talent = prompt("What is your talent?");
    //     if (talent == null || talent == "") {
    //         alert("You did not enter a talent");
    //     } else {
    //         alert(`${talent}, Wow what a talent!`);
    //     }
    // }
}

function Continue() {
    window.location.href = "index5.html";
}