let currentIndex = 0;
const carousel = document.getElementById("carousel");
const slides = carousel.children;

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1;
  }
  updateCarousel();
}

// pra ajustar se mudar tamanho da tela
window.addEventListener("resize", updateCarousel);
const container = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // posição horizontal aleatória (0 a 100% da tela)
  heart.style.left = Math.random() * 100 + "vw";

  // duração da animação entre 4s e 8s
  const duration = 4 + Math.random() * 4;
  heart.style.animationDuration = duration + "s";

  // delay para que não caiam todos juntos
  heart.style.animationDelay = Math.random() * duration + "s";

  container.appendChild(heart);

  // remove o coração após a animação pra limpar o DOM
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// cria um coração a cada 300ms
setInterval(createHeart, 300);

const openBtn = document.getElementById("openLetterBtn");
const letterWrapper = document.getElementById("letter-wrapper");
const letter = document.getElementById("letter");

openBtn.addEventListener("click", () => {
  // mostra a cartinha
  letterWrapper.classList.remove("hidden");

  // animação suave: aparece e aumenta
  setTimeout(() => {
    letter.classList.remove("scale-90", "opacity-0");
    letter.classList.add("scale-100", "opacity-100");
  }, 100);

  // remove o botão depois de abrir
  openBtn.style.display = "none";
});
