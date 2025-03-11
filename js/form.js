document.addEventListener("DOMContentLoaded", () => {
    let formElement = document.querySelector("#query-form");

    formElement.addEventListener("submit", (event) => {
        handleForm(event);
    });
})

function handleForm(event) {
    let formElement = document.querySelector("#query-form");
    event.preventDefault();
    let formData = new FormData(formElement);

    let waBtn = document.querySelector("#wa-btn");
    let teleBtn = document.querySelector("#tele-btn");

    const data = formData;

    for (const value of data.values()) {
        console.log(value);
    }
    
    if (event.submitter.id === "wa-btn") {
        console.log("Whatsapp");
        // let whatsappURL = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodedText}`;
        // window.open(whatsappURL, "_blank");
    } else if (event.submitter.id === "tele-btn") {
        console.log("Telegram");
        // let telegramURL = `https://t.me/YOUR_TELEGRAM_USERNAME?text=${encodedText}`;
        // window.open(telegramURL, "_blank");
    }
}
