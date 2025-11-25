// Sending from form to Google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbyeMMPBoUYkTrEPR3ZBPpkMBBQGShyQzv5nw4Q6JGaUEOvd1CbT3Bc2pHK7ZNfvBgRidA/exec'
const form = document.forms['contact-form']
const success = document.getElementById('success');
const danger = document.getElementById('danger');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .then(response => document.getElementById("myForm").reset())
        .then(response => success.style.display = 'block')
        .catch(error => console.error('Error!', error.message))
        .catch(error => danger.style.display = 'block')

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 15000);
})

// Age function
const ageE = document.getElementById('age');

function age() {
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();

    let age = year - 2011;
    if (month < 4) {
        ageE.innerHTML = age - 1
    } else if (month == 4) {
        if (day < 10) {
            ageE.innerHTML = age - 1
        } else if (day == 10) {
            ageE.innerHTML = age
        } else if (day > 10) {
            ageE.innerHTML = age
        }
    } else if (month > 4) {
        ageE.innerHTML = age
    }
}

age()