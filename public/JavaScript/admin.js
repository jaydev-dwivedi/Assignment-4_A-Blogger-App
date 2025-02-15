document.addEventListener("DOMContentLoaded", function (event) {
  console.log("Document Loaded");

  const showNavbar = (toggleIcons, navId, bodyId, headerId) => {
    const toggle = document.getElementsByClassName(toggleIcons),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    console.log("Show navbar called");
    console.log(toggle, nav, bodypd, headerpd);


    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      console.log("All variables exist");

      Array.from(toggle).forEach((icon) => {
        icon.addEventListener('click', () => {
          // show navbar
          nav.classList.toggle('show')
          // change icon
          Array.from(toggle).forEach((element) => {
            element.classList.toggle('d-none');
          })
          // add padding to body
          bodypd.classList.toggle('body-pd')
          // add padding to header
          headerpd.classList.toggle('body-pd')
        })
      })

    }
  }

  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll('.nav_link')

  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))

  // Your code to run since DOM is loaded and ready
});
