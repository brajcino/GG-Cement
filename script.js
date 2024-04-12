document.addEventListener('DOMContentLoaded', (event) => {
    const logoLink = document.querySelector('.logo-link');
    const staticLogo = document.querySelector('.static-logo');
    const topNav = document.querySelector('.top-nav');
    const logoOffset = topNav.offsetHeight + topNav.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > logoOffset) {
            logoLink.style.display = 'none';
            staticLogo.style.display = 'block'; // Show static logo
        } else {
            logoLink.style.display = 'block'; // Show spinning logo
            staticLogo.style.display = 'none'; // Hide static logo
        }
    });
});

const words = ["driveways", "patios", "roads", "decks"];
let index = 0;

function updateText() {
  const animatedText = document.querySelector('.animated-text');
  animatedText.textContent = words[index];
  animatedText.style.width = `${words[index].length}ch`; // `ch` is a width unit that represents the width of the character "0"
  index = (index + 1) % words.length;
}

// Initial call to set the first word
updateText();

// Update the text every 4 seconds
setInterval(updateText, 4000);
