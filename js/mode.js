//https://www.youtube.com/watch?v=E_dBqPP9MxI

let mode = "norm";
const SWITCH = document.getElementById('mode');
DARKMODE = window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log("dark mode");

const switchMode = () => {
    DARKMODE = !DARKMODE;
    setClassToBody();
};

const setClassToBody = () => {
    if (DARKMODE) {
        BODY.classList.remove('light');
        BODY.classList.remove('dark');
    } else {
        BODY.classList.remove('dark');
        BODY.classList.remove('light');
    }
};

BUTTON.addEventListener('click', switchMode);
setClassToBody();

console.log(DARKMODE);