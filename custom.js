window.addEventListener("DOMContentLoaded", () => {
    // ✅ Injeta o CSS externo
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "/config/data/themes/default/custom.css"; // Caminho dentro do container
    document.head.appendChild(css);

    // ✅ Cria o botão
    const header = document.querySelector(".headerRight");

    if (header) {
        const btn = document.createElement("a");
        btn.textContent = "🛠 Suporte";
        btn.href = "https://materprint.com.br";
        btn.target = "_blank";
        btn.className = "suporte-botao";

        header.prepend(btn);
    }
});
