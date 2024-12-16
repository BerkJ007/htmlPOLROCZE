function send_message() {
    if(verifymessage()) {
    alert("Wiadomość została wysłana")
    location.reload()}
     else {
        const button = document.getElementById("contactformularz")
        button.classList.add("redelement")
        setTimeout(function(){button.classList.remove("redelement")},3000);
        alert("Wiadomość nie mogła zostać wysłana, złe słownictwo.")
        
        console.log(button)
    }

}

function showmenu(showbutton) {
    let headerbuttons = document.getElementById("header_buttons")
    showbutton.remove()
    headerbuttons.classList.remove("hidden")
    headerbuttons.classList.add("showanimation")
}

function generateheaders() {
    let header = document.getElementsByTagName("header")[0]
    header.innerHTML = `<a href="index.html">
            
            <img src="/Photos/BergBikes.png" alt="">
    
            </a>


        <div class="header_buttons hidden" id="header_buttons" >
        
            <a href="Onas.html">
                <button>
                O nas
                </button>
            </a>
        
            <a href="Naszamisja.html">
                <button>
                Nasza misja
                </button>
            </a>
        
            <a href="Naszemodele.html">
                <button>
                Nasze modele
                </button>
            </a>    
        
            <a href="Kalkulatorkosztów.html">
                <button>
                    Kalkulator kosztów
                </button>
            </a>
        
            <a href="Kontakt.html">
                <button>
                    Kontakt
                </button>
            </a>
            
        </div>

        <button onmousedown="showmenu(this)" class="showmenubutton">
        Menu
        </button>`
}

function verifymessage() {
    const forbidden_words = ["kaczka","kurcze","kurka","cholibka"]
    const messageinput = document.getElementById("usermessage")
    const message = messageinput.value.toLowerCase()
    
    for(let word of forbidden_words) {
        if(message.includes(word)) {
            return false
        } 
    }
    return true
}


function createvisionimparedbutton() {
let button  = document.createElement("button")
button.innerHTML = "powiększ czcionkę"
button.classList.add("visionbutton")
document.getElementsByTagName("body")[0].appendChild(button
)
button.onclick = () => {
    console.log("button clicked")
    for(let btn of document.getElementsByTagName("button")){
        console.log(btn.style.fontSize)
        btn.style.fontSize = "50px"
    }
    for(let btn of document.getElementsByTagName("p")){
        console.log(btn.style.fontSize)
        btn.style.fontSize = "30px"
    }
}
}