window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("ScrollTopButton").style.display = "block";
  } else {
    document.getElementById("ScrollTopButton").style.display = "none";
  }
}

function scrollTopDocument() {
  window.scroll({top: 0, behavior: "smooth"})
}

const cardOverlays = document.querySelectorAll('.card-img-overlay');
const cardImages = document.querySelectorAll('.card-img');

for (let i = 0; i < cardOverlays.length; i++) {
  const overlay = cardOverlays[i];
  const image = cardImages[i];

  overlay.addEventListener('mouseenter', function() {
    image.style.transition = 'transform 0.3s ease-in-out, filter 0.3s ease-in-out';
    image.style.transform = 'scale(1.1)';
    image.style.filter = 'brightness(80%)';
  });

  overlay.addEventListener('mouseleave', function() {
    image.style.transition = 'transform 0.3s ease-in-out, filter 0.3s ease-in-out';
    image.style.transform = 'scale(1)';
    image.style.filter = 'brightness(50%)';
  });
}




