// ======================== JAVA FOR MEDIA VIEW MENUS ========================================

const navSlide = () => {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-links')
  const navLinks = document.querySelectorAll('.nav-links li')

  burger.addEventListener('click', () => {
    // Toggle Navigaton
    nav.classList.toggle('nav-active')

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
      }
    })
    //burger animation
    burger.classList.toggle('toggle')
  })
}

navSlide()

// ========================CONSOLE LOGGING PATH SIZES +=========================================

const logo = document.querySelectorAll('#logo path')

for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
}
