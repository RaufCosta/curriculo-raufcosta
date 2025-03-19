// Adiciona o botão "Voltar ao Topo"
document.addEventListener("DOMContentLoaded", function () {
    let btnTopo = document.createElement("button");
    btnTopo.innerText = "⬆️";
    btnTopo.id = "btnTopo";
    document.body.appendChild(btnTopo);

    btnTopo.style.position = "fixed";
    btnTopo.style.bottom = "20px";
    btnTopo.style.right = "20px";
    btnTopo.style.padding = "10px 15px";
    btnTopo.style.fontSize = "18px";
    btnTopo.style.background = "#0077b6";
    btnTopo.style.color = "white";
    btnTopo.style.border = "none";
    btnTopo.style.borderRadius = "50%";
    btnTopo.style.cursor = "pointer";
    btnTopo.style.display = "none";
    btnTopo.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.3)";

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    });

    btnTopo.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


// Modo Escuro/Claro
document.addEventListener("DOMContentLoaded", function () {
    let toggleButton = document.createElement("button");
    toggleButton.innerText = "🌙";
    toggleButton.id = "modoDark";
    document.body.appendChild(toggleButton);

    toggleButton.style.position = "fixed";
    toggleButton.style.top = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.padding = "10px 15px";
    toggleButton.style.fontSize = "18px";
    toggleButton.style.background = "#333";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "50%";
    toggleButton.style.cursor = "pointer";

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            toggleButton.innerText = "☀️";
        } else {
            toggleButton.innerText = "🌙";
        }
    });
});

// Estilos para o modo escuro
const darkModeStyle = document.createElement("style");
darkModeStyle.innerHTML = `
    .dark-mode {
        background-color: #121212;
        color: white;
    }
    .dark-mode section {
        background: #1e1e1e;
        color: white;
    }
`;
document.head.appendChild(darkModeStyle);

// Mensagem interativa no botão do WhatsApp
document.addEventListener("DOMContentLoaded", function () {
    const whatsappButton = document.querySelector(".whatsapp-button");
    if (whatsappButton) {
        whatsappButton.addEventListener("mouseenter", function () {
            whatsappButton.innerText = "Fale comigo!";
        });

        whatsappButton.addEventListener("mouseleave", function () {
            whatsappButton.innerText = "WhatsApp";
        });
    }
});
