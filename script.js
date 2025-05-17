
function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrtexto = elemento.innerHTML.split('');
        /*console.log(arrtexto)*/
        elemento.innerHTML = '';
        arrtexto.forEach(( letra,i ) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            } , 75*i);
        });
    }
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}
escrevendoLetra();
const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .navegacao-primaria')
ativaMenu.addEventListener('click' , function(){
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado') 
})
                             















const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio
    if (nameInput.value.trim() === "") {
        alert("Por favor, preencha o seu nome.");
        return;
    }

    // Verifica se o e-mail está vazio
    if (nameInput.value.trim() === ""|| !isEmailIvalid(emailInput.value)) {
        alert("Por favor, preencha o campo email corretamente.");
        return;
    }
    

    // Verifica se a mensagem está vazia
    if (messageTextarea.value.trim() === "") {
        alert("Por favor, escreva uma mensagem.");
        return;
    }

    // Se tudo estiver preenchido, envia o formulário
    form.submit();
});
function isEmailIvalid(email){
    // cria uma rees para vlidar email
    const emailRegex = new RegExp(



        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        
    );
    if (emailRegex.test(email)){
        return true;
    }
    return false;


}
