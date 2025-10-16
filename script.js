// Back to top function
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// Nav Active function
let navBar = document.getElementsByClassName("nav-link");

for (let i = 0; i < navBar.length; i++) {
  navBar[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

// Smooth Scroll
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

function openFullscreen(button) {
  const carousel = button.closest('.carousel');

  // menggeluarkan fullscreen
  if (document.fullscreenElement) {
    document.exitFullscreen();
    button.innerHTML = `<i class="bi bi-arrows-fullscreen"></i>`; 
  } 
  // masuk ke fullscreen
  else {
    if (carousel.requestFullscreen) {
      carousel.requestFullscreen();
    } else if (carousel.webkitRequestFullscreen) {
      carousel.webkitRequestFullscreen();
    } else if (carousel.msRequestFullscreen) {
      carousel.msRequestFullscreen();
    }
    button.innerHTML = `<i class="bi bi-fullscreen-exit"></i>`; 
  }
}

// jika user gunakan esc
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    document.querySelectorAll(".fullscreen-btn i").forEach(icon => {
      icon.className = "bi bi-arrows-fullscreen";
    });
  }
});


