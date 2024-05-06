const form = document.getElementById("FORMULA");
const telPreto = `<img src="./Imagens/Whats.png"S alt="Whatsaap">`

let linhas = '';


form.addEventListener("submit", function(e){
    e.preventDefault();

    const inputNomeContato = document.getElementById ("CONTATO");
    const inputEndereçoDDD = document.getElementById ("DDD");
    const inputNumeroContato = document.getElementById ("NUMERO");

    let linha = `<tr>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputEndereçoDDD.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td>${telPreto}</td>`
    
    
    linhas += linha;
    
    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas;


    inputNomeContato.value = ''
    inputEndereçoDDD.value = ''
    inputNumeroContato.value = ''
    console.log(`Nome: ${inputNomeContato.value} - DDD ${inputEndereçoDDD.value} - Contato ${inputNuemeroContato.value}`);

})
