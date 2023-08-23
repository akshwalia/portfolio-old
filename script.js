const helloPage = document.querySelector(".hellopage");
const welcome =  document.querySelector('.welcome');
const wrapper =  document.querySelector('.wrapper');
const background = document.querySelector('.background');

const helloWords = ['Bonjour','Ciao','Hola','你好','नमस्ते'];


function displayWelcomePage() {
    let i=0;
    setTimeout(() => {
        helloPage.innerHTML = helloWords[i];
        i++;
    },150);
    setTimeout(() => {
        helloPage.innerHTML = helloWords[i];
        i++;
    },300);
    setTimeout(() => {
        helloPage.innerHTML = helloWords[i];
        i++;
    },450);
    setTimeout(() => {
        helloPage.innerHTML = helloWords[i];
        i++;
    },600);
    setTimeout(() => {
        helloPage.innerHTML = helloWords[i];
        i++;
    },750);
    setTimeout(() => {
        helloPage.style.display = "none";
        welcome.innerHTML = "Welcome!";
        welcome.style.opacity = '1';
    },900);
    setTimeout(() => {
        welcome.style.opacity = '0';
    },2000);
    setTimeout(() => {
        background.style.opacity = '1';
        background.style.background = "linear-gradient(180deg, rgba(22,53,53,1) 26%, rgba(0,0,0,1) 66%, rgba(22,53,53,1) 100%);";
    },2150)
}

displayWelcomePage();

