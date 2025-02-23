const span = document.querySelector('span');
let name = localStorage.getItem('username'); 
document.getElementById('name').innerHTML = name;
const header = document.querySelector('h2');

setTimeout(() => {
    const div = document.querySelector(".Hello");
    if (div) {
        div.style.display= "none"; 
        header.style.display = "block";
    }
}, 6000);

function Continue() {
    window.location.href = "index4.html";
}