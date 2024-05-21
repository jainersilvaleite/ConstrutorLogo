// variáveis do script
// 0: display none; 1: display inline-flex
let estadoBotaoCorImagemLogo = 0;
let estadoBotaoModeloLogo = 0;
let estadoBotaoFontePrimaria = 0;
let estadoBotaoFonteSecundaria = 0;
let estadoBotaoCorFontePrimaria = 0;
let estadoBotaoCorFonteSecundaria = 0;

// elementos HTML
const botao__corimagemlogo =
    document.getElementById("botao__corimagemlogo");
const opcoes__corimagemlogo = 
    document.getElementById("opcoes__corimagemlogo");
const botao__modelologo =
    document.getElementById("botao__modelologo");
const opcoes__modelologo = 
    document.getElementById("opcoes__modelologo");
const botao__fonteprimaria =
    document.getElementById("botao__fonteprimaria");
const opcoes__fonteprimaria = 
    document.getElementById("opcoes__fonteprimaria");
const botao__fontesecundaria =
    document.getElementById("botao__fontesecundaria");
const opcoes__fontesecundaria = 
    document.getElementById("opcoes__fontesecundaria");
const botao__corfonteprimaria =
    document.getElementById("botao__corfonteprimaria");
const opcoes__corfonteprimaria = 
    document.getElementById("opcoes__corfonteprimaria");
const botao__corfontesecundaria =
    document.getElementById("botao__corfontesecundaria");
const opcoes__corfontesecundaria = 
    document.getElementById("opcoes__corfontesecundaria");

const exibirOpcoesCorImagemLogo = () => {
    opcoes__corimagemlogo.style.display = 
        estadoBotaoCorImagemLogo == 0 ? "inline-flex" : "none";
    estadoBotaoCorImagemLogo = estadoBotaoCorImagemLogo == 0 ? 1 : 0; 
}
const exibirOpcoesModeloLogo = () => {
    opcoes__modelologo.style.display = 
        estadoBotaoModeloLogo == 0 ? "inline-flex" : "none";
    estadoBotaoModeloLogo = estadoBotaoModeloLogo == 0 ? 1 : 0; 
}
const exibirOpcoesFontePrimaria = () => {
    opcoes__fonteprimaria.style.display = 
        estadoBotaoFontePrimaria == 0 ? "inline-flex" : "none";
    estadoBotaoFontePrimaria = estadoBotaoFontePrimaria == 0 ? 1 : 0; 
}
const exibirOpcoesFonteSecundaria = () => {
    opcoes__fontesecundaria.style.display = 
        estadoBotaoFonteSecundaria == 0 ? "inline-flex" : "none";
    estadoBotaoFonteSecundaria = estadoBotaoFonteSecundaria == 0 ? 1 : 0; 
}
const exibirOpcoesCorFontePrimaria = () => {
    opcoes__corfonteprimaria.style.display = 
        estadoBotaoCorFontePrimaria == 0 ? "inline-flex" : "none";
    estadoBotaoCorFontePrimaria = estadoBotaoCorFontePrimaria == 0 ? 1 : 0; 
}
const exibirOpcoesCorFonteSecundaria = () => {
    opcoes__corfontesecundaria.style.display = 
        estadoBotaoCorFonteSecundaria == 0 ? "inline-flex" : "none";
    estadoBotaoCorFonteSecundaria = estadoBotaoCorFonteSecundaria == 0 ? 1 : 0; 
}

botao__corimagemlogo.addEventListener("click", exibirOpcoesCorImagemLogo);
// botao__modelologo.addEventListener("click", exibirOpcoesModeloLogo)
botao__fonteprimaria.addEventListener("click", exibirOpcoesFontePrimaria);
botao__fontesecundaria.addEventListener("click", exibirOpcoesFonteSecundaria);
botao__corfonteprimaria.addEventListener("click", exibirOpcoesCorFontePrimaria);
botao__corfontesecundaria.addEventListener("click", exibirOpcoesCorFonteSecundaria);