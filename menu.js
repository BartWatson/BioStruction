var menuItem= document.querySelectorAll(".Item")

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('Ativo')

    )
    this.classList.add('Ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click',selectLink)
)

function mudarPagina(novaPagina) {
    window.location.href = novaPagina;
}

//Exer menu
var expande= document.querySelector('#expande')
var menuSide= document.querySelector('.menu-lateral')

expande.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

document.getElementById("formulario-contato").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que o formulário seja enviado normalmente
    
    // Simule o envio do e-mail (substitua este código com a lógica real do envio do e-mail)
    // Aqui, estamos apenas exibindo uma mensagem de sucesso após 2 segundos.
    setTimeout(function () {
        var mensagem = document.getElementById("mensagem");
        mensagem.style.display = "block";
        mensagem.textContent = "E-mail enviado com sucesso!";
    }, 3000); // Aguarde 2 segundos para exibir a mensagem
    
    // Limpar o campo de e-mail após o envio (opcional)
    document.getElementById("email").value = "";
});

