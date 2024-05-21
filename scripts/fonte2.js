const fontesecundaria__opcoes = 
    document.querySelectorAll(".fontesecundaria__seletor__opcoes li");

fontesecundaria__opcoes.forEach(opcao => {
    opcao.addEventListener("click", () => {
        libras.style.fontFamily = 
            "var(--" + opcao.firstElementChild.firstElementChild
            .innerHTML.split(" ")[0].toLowerCase() + ")";
    });
});