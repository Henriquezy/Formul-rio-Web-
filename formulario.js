 // Função para adicionar as máscaras aos inputs 
 function mascara() {
    //mascara cep
    document.getElementById('cep').addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(
        /(\d{2})(\d{3})(\d{3})/, '$1.$2-$3'
    );
    });
    // mascara  telefone
    document.getElementById('telefone').addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(
        /(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4'
    );
    });
    // mascara  cnpj 
    document.getElementById('cnpj').addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/0001-$5'
    );
    });
    // mascara codigo 
    document.getElementById('codigo').addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(
        /(\w{2})(\w{2})(\w{3})(\w{3})(\w{1})(\w{3})/, '$1_$2//$3-$4.$5.$6'
    );
    });
}
// Função para inicializar o uso da função mascara 
window.onload = function() {
    mascara();
}
// função para receber os dados do usuario no navegador 
function registrarDados() { //função chamada no botão para armazenar os dados e redirecionar a pagina 
    
    // receber nome
    const nome = document.getElementById('nome').value; //atribui o valor do usuario a variavel nome
    if(nome) { //se 'nome' receber algum valor retornar um alerta de sucesso e redirecionar para outra pagina
        localStorage.setItem('nomeUsuario', nome); //comando para armazenar o valor inserido pelo usuario 
        alert('Dados registrados  com sucesso'); //comando para exibir uma mensagem de sucesso para o usuario 
        window.location.href = 'dados.html'; //comando para redirecionar a pagina
    }
    else{ //se não retornar um alerta para preencher o campo vazio 
        alert('Por favor, preencha todo o formulario'); //comando para exibir uma mensagem de falha para o usuario
    }

    //receber endereço 
    const endereco = document.getElementById('endereço').value;
    if(endereco) {
        localStorage.setItem('endereçoUsuario', endereco);
    }
    else {
        alert("Por favor, preencha todo o formulario");
    }

    //receber CEP
    const cep = document.getElementById('cep').value;
    if(cep) {
        localStorage.setItem('cepUsuario', cep);
    }
    else {
        alert('Por favor, preencha todo o formulario');
    }

    //receber telefone 
    const telefone = document.getElementById('telefone').value;
    if(telefone) {
        localStorage.setItem('telefoneUsuario', telefone);
    }
    else {
        alert('Por favor, preencha todo o formulario');
    }

    //receber cnpj 
    const cnpj = document.getElementById('cnpj').value;
    if(cnpj) {
        localStorage.setItem('cnpjUsuario', cnpj);
    }
    else {
        alert('Por favor, preencha todo o formulario');
    }

    //receber codigo 
    const codigo = document.getElementById('codigo').value;
    if(codigo) {
        localStorage.setItem('codigoUsuario', codigo);
    }
    else {
        alert('Por favor, preencha todo o formulario');
    }

    
}