const WHATSAPP_NUMBER = "573174149192";
const header = document.querySelector(".topbar");

const buildWhatsAppUrl = (message) => {
  const cleanMessage = message?.trim() || "Hola quiero hacer un pedido";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(cleanMessage)}`;
};

document.querySelectorAll("[data-wa-message]").forEach((button) => {
  const message = button.getAttribute("data-wa-message") || "Hola quiero hacer un pedido";
  button.setAttribute("href", buildWhatsAppUrl(message));

  button.addEventListener("click", (event) => {
    if (button.getAttribute("target") === "_self") {
      return;
    }

    event.preventDefault();
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  });
});

const syncHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", syncHeaderState, { passive: true });
syncHeaderState();
