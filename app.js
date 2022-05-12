const pwSubtext = document.querySelector(".pw-subtext");
const pw = document.querySelector("#password");
const pwConfirm = document.querySelector('#confirmPassword');
const create = document.querySelector("button");
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (pw.value !== pwConfirm.value) {
        pwSubtext.innerText = "*passwords do not match";
        console.log('button clicked')
    }
})