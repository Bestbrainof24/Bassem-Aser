function getname() {
    let name = document.getElementById("name").value;
    if(name == "") {
        alert("Please enter your name!");
        return;
    } else {
        localStorage.setItem("username", name); 
        window.location.href = "index3.html";
    }
}

