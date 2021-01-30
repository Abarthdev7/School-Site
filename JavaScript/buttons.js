function submit_add() {
    var input = document.getElementsByClassName("button_add")
    alert('Your Form Has Been Submited');

}

function button_edit() {
    var edit = document.getElementsByClassName("button_edit")
    alert('Your Form Has Been Modified')
}

function button_update() {
    var update = document.getElementsByClassName("button_update")
    alert('Your Form Has Been Updated')
}

function count() {
    let fere = document.querySelector('.oral_mark').value;
    fere = parseInt(fere)
    if (fere > 20) {
        return alert('Your value is more than 20')

    }

}