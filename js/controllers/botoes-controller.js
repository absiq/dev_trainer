// BOTÕES DA HEADER

document.getElementById("assinaragora").onclick = function () {
    window.location = "./html/cadastro.html";
};

document.getElementById("btnconfiranossosplanos").onclick = function () {
    window.location = "././index.html#planos";
};


// BOTÕES DOS PLANOS 

document.getElementById("planosbasico").onclick = function () {
    window.location = "./html/cadastro.html";
};

document.getElementById("planosjunior").onclick = function () {
    window.location = "./html/cadastro.html";
};

document.getElementById("planospleno").onclick = function () {
    window.location = "./html/cadastro.html";
};

document.getElementById("planossenior").onclick = function () {
    window.location = "./html/cadastro.html";
};
//botão voltar pagina de login

document.getElementById("#btnvoltarlogin").onclick = function (e) {
    e.preventDefault()
    window.location = "../index.html";
};