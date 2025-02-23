document.addEventListener("DOMContentLoaded", function () {
    let count = localStorage.getItem("count") ? localStorage.getItem("count") : 1;
    console.log(`This page has loaded for ${count} times`);
    count++;
    localStorage.setItem("count", count);
})

function Continue() {
    window.location.href = "index2.html";
}