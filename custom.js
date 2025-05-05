window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".headerRight");

    if (header) {
        const btn = document.createElement("a");
        btn.textContent = "🛠 Suporte";
        btn.href = "https://materprint.com.br";
        btn.target = "_blank";
        btn.style.color = "white";
        btn.style.backgroundColor = "#0077cc";
        btn.style.padding = "5px 10px";
        btn.style.marginRight = "10px";
        btn.style.borderRadius = "5px";
        btn.style.fontWeight = "bold";
        btn.style.textDecoration = "none";
        btn.style.cursor = "pointer";

        header.prepend(btn);
    }
});
