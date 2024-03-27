
const scriptURL = 'https://script.google.com/a/macros/vu.edu.pk/s/AKfycby2q68ee0w9zKsdj8Yyw-f8xecDsRzRmZiYdchOm7ZiX9c_Ht2NT_ybVdIHInK894E4hw/exec'
const form = document.forms['submit-to-google-sheet']
const successMsg = document.getElementById("successMsg");

form.addEventListener('submit', e => {
    e.preventDefault();

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin', 'http://127.0.0.1:5500');

    fetch(scriptURL, { mode: 'no-cors', credentials: 'include', method: 'POST', headers: headers, body: new FormData(form), })
        .then(() => {
            successMsg.innerHTML = "Thanks You For Subscribing";
            successMsg.style.color = "#61b752";

            setTimeout(() => {
                successMsg.innerHTML = "";
                form.reset();
            }, 5000);
        })
        .catch(() => {
            successMsg.innerHTML = "Error In Submitting Form";
            successMsg.style.color = "red";

            setTimeout(() => {
                successMsg.innerHTML = "";
                form.reset();
            }, 5000);
        })
})
