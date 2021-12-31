console.log("Prashant");

// console.log(window.scrollTop());
document.addEventListener("scroll", function() {
    var top = document.getElementById("mybt");
    if (window.scrollY > 600) {
        console.log("scroll");
        top.classList.add("visible");
    } else {
        top.classList.remove("visible");
    }
});

window.onload = function() {

    const cam = document.getElementById('cam');
    console.log(cam);
    cam.addEventListener('mouseenter', () => {
        console.log('Prashant');
        var but = document.getElementById("but");
        but.style.display = "unset";
    });
    cam.addEventListener('mouseleave', () => {
        console.log('Prashant');
        var but = document.getElementById("but");
        but.style.display = "none";
    });
}


// ----------------------------------------