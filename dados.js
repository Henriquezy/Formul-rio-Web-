//exibir a variavel nome armazenada no localstorage
const nome = localStorage.getItem('nomeUsuario'); //variavel nome = localstorage GET(esta recebendo o dado do localStorage) do id 'nome usuario'
if(nome) { //se nome for recebido exibir no formulario
    document.getElementById('exibirNome').textContent = nome;
}
else{ //se não exibir usuario desconhecido 
    document.getElementById('exibirNome').textContent = 'usuario desconhecido';
};

//endereço
const endereco = localStorage.getItem('endereçoUsuario');
if(endereco) {
    document.getElementById('exibirEndereço').textContent = endereco;
}
else {
    document.getElementById('exibirEndereço').textContent = 'endereço desconhecido';
};

//Cep
const cep = localStorage.getItem('cepUsuario');
if(cep) {
    document.getElementById('exibirCep').textContent = cep;
}
else {
    document.getElementById('exibirCep').textContent = 'Cep desconhecido';
};

//telefone 
const telefone = localStorage.getItem('telefoneUsuario');
if(telefone) {
    document.getElementById('exibirTelefone').textContent = telefone;
}
else {
    document,getElementById('exibirTelefone').textContent = 'telefone desconhecido';
};

//Cnpj 
const cnpj = localStorage.getItem('cnpjUsuario');
if(cnpj) {
    document.getElementById('exibirCnpj').textContent = cnpj;
}
else  {
    document.getElementById('exibirCnpj') = 'Cnpj desconhecido';
};

//Codigo 
const codigo = localStorage.getItem('codigoUsuario');
if(codigo) {
    document.getElementById('exibirCodigo').textContent = codigo;
}
else {
    document.getElementById('exibirCodigo').textContent = 'Codigo desconhecido';
};
