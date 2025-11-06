// ✨ Animação de entrada da caixa principal
window.addEventListener("load", () => {
  const box = document.getElementById("mainBox");
  setTimeout(() => {
    box.classList.add("show");
  }, 400);
});

// 💫 Pequeno efeito parallax do fundo com o movimento do mouse
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  document.body.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

// 🌟 Efeito de clique com animação rápida
function goTo(url) {
  const btns = document.querySelectorAll(".btn");
  btns.forEach(btn => btn.style.transform = "scale(0.95)");
  setTimeout(() => {
    window.location.href = url;
  }, 150);
}
