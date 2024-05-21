const fonteprimaria__opcoes = 
    document.querySelectorAll(".fonteprimaria__seletor__opcoes li");

fonteprimaria__opcoes.forEach(opcao => {
    opcao.addEventListener("click", () => {
        signum.style.fontFamily = 
            "var(--" + opcao.firstElementChild.firstElementChild
            .innerHTML.split(" ")[0].toLowerCase() + ")";
    });
});