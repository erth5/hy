
let DARKMODE = false;
DARKMODE = window.matchMedia('(prefers-color-scheme: dark)').matches;
const input = document.getElementById('switch');

const switchMode = () => {
    DARKMODE = !DARKMODE;
    setClassToBody();
};

const setClassToBody = () => {
    if (DARKMODE) {
        $f('body').classList.remove('light');
        $f('body').classList.add('dark');
    } else {
        $f('body').classList.remove('dark');
        $f('body').classList.add('light');
    }
    console.log("darkmode = " + DARKMODE)
}

input.addEventListener('click', switchMode);
setClassToBody();

console.log("JS: darkmode ready")
