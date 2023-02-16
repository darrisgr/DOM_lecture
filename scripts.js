window.addEventListener("load", function() {
    let body = document.querySelector("body");
    let orange = document.getElementById("orange");
    let regrets = document.getElementById("regrets");
    let troll = document.getElementById("troll");
    let fixer = document.getElementById("cleanup");

    orange.addEventListener("click", function() {
        body.style.backgroundColor = "orange";
    });

    regrets.addEventListener("click", function() {
        body.style.backgroundColor = "";
    })

    troll.addEventListener("mouseover", function() {
        troll.innerHTML = "YOU DUN GOOFED NOW 😈"
        troll.style.fontSize = "50px";
        body.style.backgroundColor = "#ff1100";
        regrets.disabled = true;
        orange.disabled = true;
    });

    troll.addEventListener("mouseout", function() {
        troll.innerHTML = "Hello there. 🙂"
        body.style.backgroundColor = "";
        fixer.style.display = "";
    });

    fixer.addEventListener("click", function() {
        regrets.disabled = false;
        orange.disabled = false;
        troll.style.fontSize = "13px";
    });
});