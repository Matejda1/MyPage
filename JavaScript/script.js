// Sending from form to Google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbyeMMPBoUYkTrEPR3ZBPpkMBBQGShyQzv5nw4Q6JGaUEOvd1CbT3Bc2pHK7ZNfvBgRidA/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})

// Delay onClick wait 2 second and delete text in form
async function refreshPage() {
    console.log("waiting");
    await sleep(2)
    document.getElementById("myForm").reset();
}
async function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}