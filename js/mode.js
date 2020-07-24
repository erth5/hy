//https://www.youtube.com/watch?v=E_dBqPP9MxI

let mode = "norm";
const SWITCH = document.getElementById('mode');
DARKMODE = window.matchMedia('(prefers-color-scheme: dark)').matches;

const switchMode = () => {
    DARKMODE = !DARKMODE;
    setClassToBody();
};

const setClassToBody = () => {
    if (DARKMODE) {
        $f('body').classList.remove('norm');
        $f('body').classList.remove('light');
        $f('body').classList.add('dark');
    } else {
        $f('body').classList.remove('norm');
        $f('body').classList.remove('light');
        $f('body').classList.add('light');
    }
};

SWITCH.addEventListener('click', switchMode);
setClassToBody();

console.log("DARKMODE: " + DARKMODE);