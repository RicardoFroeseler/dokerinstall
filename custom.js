function inserirBotaoSuporte() {
    const header = document.querySelector(".headerRight");

    if (header && !document.querySelector(".suporte-botao")) {
        const btn = document.createElement("a");
        btn.textContent = "🛠 Suporte";
        btn.href = "https://materprint.com.br";
        btn.target = "_blank";
        btn.className = "suporte-botao";
        header.prepend(btn);
        clearInterval(intervalo); // parar de verificar
    }
}

// ✅ Injeta o CSS
const style = document.createElement("style");
style.textContent = `
    .suporte-botao {
        color: white;
        background-color: #0077cc;
        padding: 5px 10px;
        margin-right: 10px;
        border-radius: 5px;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
    }

    .suporte-botao:hover {
        background-color: #005fa3;
    }
`;
document.head.appendChild(style);

// ✅ Aguarda o header aparecer e insere o botão
const intervalo = setInterval(inserirBotaoSuporte, 500);
