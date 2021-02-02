var current_date = new Date().getFullYear();

const calc_bday = (input) => {
    if (input == current_date){ // not strict equal
        console.log("same day")
    }
    var birthday = Number(input) + 18;
    var current_age = Number(current_date) - Number(input);
    $i('18day').innerText = String(birthday);
    $i('current_age').innerText = String(current_age);
}
console.log("JS: birthday ready");
