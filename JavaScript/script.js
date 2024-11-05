// Sending from form to Google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbyeMMPBoUYkTrEPR3ZBPpkMBBQGShyQzv5nw4Q6JGaUEOvd1CbT3Bc2pHK7ZNfvBgRidA/exec'
const form = document.forms['contact-form']
const success = document.getElementById('success');
const danger = document.getElementById('danger');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .then(response => success.style.display = 'block')
        .catch(error => console.error('Error!', error.message))
        .catch(error => danger.style.display = 'block')

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
})


// Delay onClick wait 2 second and delete text in form
async function refreshPage() {
    console.log("waiting");
    await sleep(2.5)
    document.getElementById("myForm").reset();
}
async function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}