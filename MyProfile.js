let index = 0;
let con_card = document.querySelectorAll('.con-card');
let pre = document.querySelector(".pre");
let next = document.querySelector(".next");
con_card[0].style.left = "5%";
con_card[0].style.opacity = "1";
function updateCard(newIndex, direction) {
    if (newIndex >= 0 && newIndex < con_card.length) {
        con_card[index].style.opacity = "0";
        con_card[index].style.left = direction === "pre" ? "100%" : "-100%";
        con_card[newIndex].style.left = "5%";
        con_card[newIndex].style.opacity = "1";
        index = newIndex;
    }
}
pre.addEventListener("click", () => {
    updateCard(index - 1, "pre");
});

next.addEventListener("click", () => {
    updateCard(index + 1, "next");
});


let moveText = document.getElementById("move");
let text = "WELCOME, to My Profile.";
let x = 0;
let del = false;

function typingText() {
    moveText.innerHTML = text.substring(0,x) + "|";
    if(!del && x < text.length) {
        x++;
    } else if(del && x > 0) {
        x--;
    } else if(x == text.length) {
        del = true;
        setTimeout(typingText,500);
        return;
    } else if(x == 0) {
        del = false;
    }
    setTimeout(typingText, 200);
}
typingText();


let m = document.querySelector(".menu");
let mR = document.querySelector(".menu2right");
let menubar = document.getElementById("menubar");
let menucross = document.getElementById("menucross");

menubar.onclick = function () {
    m.style = "display: block;transition: all 2s linear;";
    mR.style = "display: block;transition: all 2s linear;";
    menubar.style = "display: none;transition: all 2s linear;";
    menucross.style = "display: block;transition: all 2s linear;";
}
menucross.onclick = function () {
    m.style = "display: none;transition: all 2s linear;";
    mR.style = "display: none;transition: all 2s linear;";
    menubar.style = "display: block;transition: all 2s linear;";
    menucross.style = "display: none;transition: all 2s linear;";
}
mR.onclick = function () {
    m.style = "display: none;transition: all 2s linear;";
    mR.style = "display: none;transition: all 2s linear;";
    menubar.style = "display: block;transition: all 2s linear;";
    menucross.style = "display: none;transition: all 2s linear;";
}