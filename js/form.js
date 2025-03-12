document.addEventListener("DOMContentLoaded", () => {
    let formElement = document.querySelector("#query-form");

    // mathCaptcha()

    formElement.addEventListener("submit", (event) => {
        handleForm(event);
    });
})

let num1;
let num2;

function mathCaptcha(){
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    
    
    document.getElementById("captchaQuestion").innerText = `What is ${num1} + ${num2}?`;

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        let correctAnswer = num1 + num2;
        let userAnswer = parseInt(document.getElementById("captchaAnswer").value);
        if (userAnswer !== correctAnswer) {
            console.log("Incorrect CAPTCHA answer!");
            event.preventDefault();
        }
    });
}

function handleForm(event) {
    let formElement = document.querySelector("#query-form");
    event.preventDefault();
    let formData = new FormData(formElement);

    let waBtn = document.querySelector("#wa-btn");
    let teleBtn = document.querySelector("#tele-btn");

    // const data = formData;

    // for (const value of data.values()) {
    //     console.log(value);
    // }

    let name = formData.get("name");
    let contact = formData.get("contact");
    let email = formData.get("email");

    let webpageQuery = formData.get("webpageQuery");
    let learningQuery = formData.get("learningQuery");
    let otherQuery = formData.get("otherQuery");

    let comment = formData.get("comment");

    let text = [
    `Hello, my name is ${name}.`,  
    " ",  
    "I would like to request for the following:",  
    webpageQuery ? `- ${webpageQuery}` : "",  
    learningQuery ? `- ${learningQuery}` : "",  
    otherQuery ? `- ${otherQuery}` : "",  
    " ",  
    "Comments:",  
    comment ? comment : "No Comments",  
    " ",  
    "Contact Information:",  
    `[Mobile]: ${contact}`,  
    `[Email]: ${email}` 
    ].filter(Boolean).join("\n");

    let encodedText = encodeURIComponent(text);
    
    console.log(encodedText);
    if (event.submitter.id === "wa-btn") {
        console.log("Whatsapp");
        let whatsappURL = `https://wa.me/6592336294?text=${encodedText}`;
        window.open(whatsappURL, "_blank");
    } else if (event.submitter.id === "tele-btn") {
        console.log("Telegram");
        let telegramURL = `https://t.me/hallasolutions?text=${encodedText}`;
        window.open(telegramURL, "_blank");
    }
}
