// function showText(id) {
//     const textElement = document.getElementById(id);
//     if (textElement.style.display === "none") {
//         textElement.style.display = "block";
//     } else {
//         textElement.style.display = "none";
//     }
// }


// const btn = document.getElementsByClassName('contact-button')
// const paragraph = document.getElementsByClassName('hidden-para')

// btn.addEventListener('click',() => {
//     paragraph.textContent = "Your email id"
// })

// document.addEventListener('DOMContentLoaded', () => {
//     const btn = document.getElementsByClassName('contact-button')[0];
//     const paragraph = document.getElementsByClassName('hidden-para')[0];

//     btn.addEventListener('click', () => {
//         showText(paragraph.id);
//     });
// });

function showText(id) {
    const textElement = document.getElementById(id);
    console.log(`Current display state: ${textElement.style.display}`);
    if (textElement.style.display === "none") {
        textElement.style.display = "block";
    } else {
        textElement.style.display = "none";
    }
    console.log(`New display state: ${textElement.style.display}`);
}

