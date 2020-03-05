function switchVisible() {
    if (document.getElementById('userLogin')) {
        if (document.getElementById('userLogin').style.display == 'none') {
            document.getElementById('userLogin').style.display = 'block';
            document.getElementById('userRegister').style.display = 'none';
        }
        else {
            document.getElementById('userLogin').style.display = 'none';
            document.getElementById('userRegister').style.display = 'block';
        }
    }
}
