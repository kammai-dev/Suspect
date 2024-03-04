let el = document.getElementById("botao");
let btns = document.getElementsByClassName("botoes")
let sus = document.getElementById("sus")
function randomDir() { 
    return Math.floor(Math.random() * (800 - 100 + 1) + 100) + 'px';
}

function randomCima() { 
    return Math.floor(Math.random() * (800 - 100 + 1) + 100) + 'px';
}

function movermouse(){
    const rndDir = randomDir();
    const rndCim = randomCima();
    el.style.position = "absolute"
    el.style.left = rndDir ;
    el.style.top = rndCim;
    el.style.cursor = "pointer"
}

el.addEventListener("mouseover", () => {
    movermouse()
})

document.getElementById("sou").addEventListener("click", () => {
    document.querySelector("body").style.animation = "colorido 4s infinite ease-in"
    sus.textContent= "HMMMM BOIOLAAA"
    document.getElementById("image").setAttribute("src", "https://imgs.search.brave.com/E6MT6U2Z8UXdru_cVBWyXNSlzy8W08LBLQT6y-af0Ko/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzUx/N2U5MzM1ZTRiMDg0/NzgyMzUwMDg0NS8x/NTY4ODQwNDM2NTMy/LTdRT1VCNFJWQjMx/TFRPVDA5UVM3LzMx/NTQzODE2NDQ2X2Fj/YTEzNDQ0M2Vfel80/YTY4YjFmNzM0OTM5/OTM4ZDFkYmJmOGU0/NWU4Mjc5NC5qcGc");
   
    el.remove()
    sus.remove()
    
})
el.addEventListener("click", () => {
    sus.textContent = "MENTIRA, PODE FALAR A VERDADE"
    movermouse()
})