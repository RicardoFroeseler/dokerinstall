function inserirBotao() {
    const h = document.querySelector(".headerRight");
    if (h && !document.querySelector(".suporte-botao")) {
      const a = document.createElement("a");
      a.textContent = "🛠 Suporte";
      a.href = "https://materprint.com.br";
      a.target = "_blank";
      a.className = "suporte-botao";
      h.prepend(a);
      clearInterval(i);
    }
  }
  const style = document.createElement("style");
  style.textContent = `
    .suporte-botao { color:white; background:#0077cc; padding:5px 10px; margin-right:10px; border-radius:5px; font-weight:bold; text-decoration:none; cursor:pointer; }
    .suporte-botao:hover { background:#005fa3; }
  `;
  document.head.appendChild(style);
  const i = setInterval(inserirBotao, 500);
  