var tampil = document.formAngka.isiText;

function ins(num) {
    tampil.value += num;
}

function equals() {
    tampil.value = eval(tampil.value);
}

function bcksp() {
    tampil.value = tampil.value.substr(0, tampil.value.length - 1);
}

function deleteAll() {
    tampil.value = "";
}
