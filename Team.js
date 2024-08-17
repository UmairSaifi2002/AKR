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

// for dark or light theme
document.addEventListener("DOMContentLoaded", function () {
    let icon = document.getElementById("ICON");
    let m = document.querySelector('.video-bg-back');
    let logo = document.querySelector('.logo');
    let n = document.querySelectorAll('.colora');
    // let c = document.querySelector('.contact');
  
    icon.addEventListener("click", function () {
      const body = document.body;
  
      // Toggle between light and dark themes
      if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
  
        // Change the icon to moon for dark mode
        icon.src = "sun.png"; 
        logo.src = "The Akr Letter White PNG.png";
        // c.style.backgroundColor = '#222'
        n.forEach(e => {
          e.style.color = "white";
        });
        m.innerHTML = `<source class="video-back" src="dark-theme-video.mp4" type="video/mp4">`;
        m.load();
  
      } else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
  
        // Change the icon back to sun for light mode
        icon.src = "moon.png"; 
        logo.src = "The AKR Letter Black PNG.png";
        // c.style.backgroundColor = '#22222275'
        n.forEach(e => {
          e.style.color = "black";
        });
        m.innerHTML = `<source class="video-back" src="light-theme-video.mp4" type="video/mp4">`;
        m.load();
      }
    });
  });