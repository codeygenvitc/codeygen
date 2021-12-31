var fname = document.getElementById('firstname');
var lname = document.getElementById('lastname');
var email = document.getElementById('mail');
var mob = document.getElementById('mob');
var but = document.getElementById('but');
console.log(fname);


var firstname = false;
var lastname = false;
var mobilevalid = false;
var validEmail = false;


fname.addEventListener('blur', () => {
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([a-zA-Z]){2,11}$/;
    let str = fname.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        fname.classList.remove('is-invalid');
        firstname = true;
    } else {
        console.log('Your name is not valid');
        fname.classList.add('is-invalid');
        firstname = false;

    }
})

lname.addEventListener('blur', () => {

    let regex = /^[a-zA-Z]([a-zA-Z]){2,11}$/;
    let str = lname.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        lname.classList.remove('is-invalid');
        lastname = true;
    } else {
        console.log('Your name is not valid');
        lname.classList.add('is-invalid');
        lastname = false;

    }
})


mob.addEventListener('blur', () => {

    let regex = /^([0-9]){10}$/;
    let str = mob.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        mob.classList.remove('is-invalid');
        mobilevalid = true;
    } else {
        console.log('Your phone is not valid');
        mob.classList.add('is-invalid');
        mobilevalid = false;

    }
})


email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    } else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

but.addEventListener('click', validity);
var valid = document.getElementById('valid');

function validity(e) {
    e.preventDefault();

    if (firstname == true && lastname == true && mobilevalid == true && validEmail == true) {

        valid.style.display = "block";
        valid.style.color = "green";
        valid.style.background = "#c0ffd5";
        valid.innerText = "Form Submission Successful !!"
    } else {
        valid.style.display = "block";
        valid.style.color = "red";
        valid.style.background = "#ffe4e8";
        valid.innerText = "Sorry !! Form Submission Is Unsuccessful !!"
    }
}