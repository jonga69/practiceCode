
const outer = document.querySelector("#outer");
const yesButton = document.querySelector("#yes");
const noButton = document.querySelector("#no");
const loveButton = document.querySelector("#ILY");
const text = document.querySelector("#text");
const content = document.querySelector("#content")


yes.addEventListener('click', Yes);
no.addEventListener('click', No);
loveButton.addEventListener('click', loveyou);


function Yes() {
    outer.style.height = '30vh';
    loveButton.style.display = "inline";
    text.innerText = "Thank you! I love you too! May sasabihin ako sayo";
    loveButton.innerText = "Ano yon?";
    yesButton.remove();
    noButton.remove();
}

function No() {
    if (event.target === noButton && noButton.innerText === "Hinde") {
        text.innerText = "Di mo ako love? ";
        yesButton.innerText = "Joke Lang love kita";
        noButton.innerText = "Oo";
    } 
    
    else if (event.target === noButton && noButton.innerText === "Oo") {
        outer.style.height = '25vh';
        text.innerText = "Sure ka di mo talaga ako love? ";
        yesButton.innerText = "Joke Lang love talaga kita";
        noButton.innerText = "Oo nga";
    } 
    
    else {
        text.innerText = "Ulitin natin ang tanong love moko? ";
        yesButton.innerText = "Joke Lang love talaga kita";
        noButton.remove();
    }
}




function loveyou() {
    text.innerText = `Hi ga!

        Una muna sa lahat Happy Birthday!! sorry kung eto lang kaya kong iregalo sayo ngayong birthday mo, sorry din kung lagi ako nag kukulang sayo at walang oras sayo. Sorry din nung mga panahon
    na kailangan moko wala ako sa tabi mo. Alam ko di ako yung best boyfriend pero salamat pa din sa pag titiis sa ugali ko. Sorry din kung nararamdaman mo minsan kung mahalaga ka pa ba sakin, syempre
    importante ka sakin ano ka ba. Alam ko puro sorry nalang ako sayo kasi pakiramdam ko di ko nagagawa yung role ko bilang bf mo. Alam ko din minsan naiinggit ka sa iba na buti pa yung mga yon may ganto
    ikaw wala. Sorry po sa lahat ng pag kukulang ko sayo.
    
        Pero ga kahit ganon mahal na mahal kita alam ko ngayon nalang ulit ako gumawa ng long message para sayo sorry kung di ko na nagagawa yung ganto di tulad dati. Sana di ka magsawa sakin, sana di ka
    mag sawa sa pag intindi sakin, sana di ka mag sawa sa pag suporta sakin. Love na love kita nandito lang ako nakasuporta sayo. Mag tatalo man tayo pero di ako mag sasawa sa pag-intindi sayo tulad ng
    pag-intindi mo sakin sorry kung di maganda tong nagawa kong love letter hahahaha pinag aaralan ko pa eh yaan mo po next time papagandahin ko pa yung design nung susunod kong love letter sayo .
    
    I love you Always!

😘😘😘`;

    outer.style.width = "1250px";
    outer.style.height = "125vh";
    text.style.fontSize = "24px";
    content.style.textAlign = "left";
    text.style.fontFamily = "Cedarville Cursive";
    loveButton.remove();
}

