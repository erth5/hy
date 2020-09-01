/*
https://www.youtube.com/watch?v=E_dBqPP9MxI
Wirkungsbereich: alle Seiten
Speicherung:
*/
DARKMODE = window.matchMedia('(prefers-color-scheme: dark)').matches;
let MODE = "norm";

const setInitClassToBody = () => {
    if (DARKMODE) {
        $f('body').classList.remove('norm');
        $f('body').classList.add('dark');
        MODE = "dark";
        console.log("automatic dark")
    }
    if (!DARKMODE) {
        $f('body').classList.remove('norm');
        $f('body').classList.add('light');
        MODE = "light";
        console.log("automatic light")
    }
};setInitClassToBody()

const setClassToBody = () => {
    if (MODE === "light") {
        $f('body').classList.remove('dark')
        $f('body').classList.remove('norm')
        $f('body').classList.add('light')
        console.log("light")
    }
    if (MODE === "norm") {
        $f('body').classList.remove('dark')
        $f('body').classList.remove('light')
        $f('body').classList.add('norm')
        console.log("norm")
    }
    if (MODE === "dark") {
        $f('body').classList.remove('light')
        $f('body').classList.remove('norm')
        $f('body').classList.add('dark')
        console.log("dark")
    }
}

LIGHT = document.getElementById('light')
LIGHT.addEventListener('mouseenter', () => MODE = "light" & setClassToBody());
$f('#norm').addEventListener('mouseenter', () => MODE = "norm" & setClassToBody());
$f('#dark').addEventListener('mouseenter', () => MODE = "dark" & setClassToBody());

console.log("DARKMODE: " + DARKMODE);
