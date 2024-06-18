function buscarEndereco() {
    let cep = document.getElementById('formCep').value
    let urlAPI = 'https://viacep.com.br/ws/' + cep + '/json/'

    fetch(urlAPI)
        .then(response => response.json())
        .then(dados => {
            document.getElementById('formLogradouro').value = dados.logradouro
            document.getElementById('formBairro').value = dados.bairro
            document.getElementById('formCidade').value = dados.localidade
            document.getElementById('formUf').value = dados.uf;
        })
        .catch(error => console.error('Erro ao buscar o endereço:', error));
}
document.getElementById('formCep').addEventListener('blur', buscarEndereco);

function validaCNPJ (cnpj) {
    var b = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ]
    var c = String(cnpj).replace(/[^\d]/g, '')
    
    if(c.length !== 14)
        return document.getElementById("validation").src = "../public/img/errado.png"

    if(/0{14}/.test(c))
        return document.getElementById("validation").src = "../public/img/errado.png"

    for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
    if(c[12] != (((n %= 11) < 2) ? 0 : 11 - n))
        return document.getElementById("validation").src = "../public/img/errado.png"

    for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
    if(c[13] != (((n %= 11) < 2) ? 0 : 11 - n))
        return document.getElementById("validation").src = "../public/img/errado.png"

    return document.getElementById("validation").src = "../public/img/correto.png"
    
}