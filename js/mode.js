//https://www.youtube.com/watch?v=E_dBqPP9MxI
DARKMODE = window.matchMedia('(prefers-color-scheme: dark)').matches;

const setInitClassToBody = () => {
    if (DARKMODE) {
        $f('body').classList.remove('norm');
        $f('body').classList.add('dark');
        console.log("automatic dark")
    }
    if (!DARKMODE) {
        $f('body').classList.remove('norm');
        $f('body').classList.add('light');
        console.log("automatic light")
    }
}//;setInitClassToBody()

const setClassToBody = (MODE) => {
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
LIGHT.addEventListener('click', () => setClassToBody("light"))
//console.log(LIGHT)

//$f('#norm').addEventListener('click', () => setClassToBody("norm"));
//$f('#dark').addEventListener('click', setClassToBody("dark"));

console.log("DARKMODE: " + DARKMODE);