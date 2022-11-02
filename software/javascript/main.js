
let linhas = ' ';

const  form = document.getElementById('form-atividade');
const imgAprovado = '<img src="../images/aprovado.png" alt="Emoji Celebridade">'
const imgReprovado = '<img src="../images/reprovado.png" alt="Emoji Decepcionado">';
const inputNomeAtividade = document.getElementById('nome-atividade');
const inputNotaAtividade = document.getElementById('nota-atividade');
const nomeAtividadeArray = [];
const notaAtividadeArray = [];
let notaMinima = parseFloat(Number(prompt('Digite uma nota minima:')));


if(notaMinima == 0){

    notaMinima = 7;

}

form.addEventListener('submit', function(e){

    e.preventDefault();
    
    if(nomeAtividadeArray.includes(inputNomeAtividade.value.trim())){

        alert(`A atividade: ${inputNomeAtividade.value} já  foi inserida!`);

    }
    else{

        adicionaLinha();
        atualizaTabela();
        controleDaMedia();

    }

});

function adicionaLinha() { 


        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;
        linhas += linha;


}

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function controleDaMedia(){
    
    let somaMedia = 0;
    let resultado  = 0;
    const atualizaResultado = document.querySelector('.resultado-final');
    const atualizaMediaFinal = document.querySelector('.media-final');
    const spanAprovado = '<span class="aprovado">Aprovado</span>';
    const spanReprovado = '<span class="reprovado">Reprovado</span>';

    nomeAtividadeArray.push(inputNomeAtividade.value.trim());
    notaAtividadeArray.push(parseFloat(inputNotaAtividade.value.trim()));
    
    notaAtividadeArray.forEach(notas =>{
    
        somaMedia = somaMedia + notas;

    });

    resultado  = somaMedia / notaAtividadeArray.length;
    atualizaMediaFinal.innerHTML = resultado.toFixed(2);

    if(notaAtividadeArray.length == 1){

        atualizaMediaFinal.innerHTML = 'Notas insuficiente';
        
    }
    else{

        atualizaResultado.innerHTML =  resultado < notaMinima  ? spanReprovado : spanAprovado;

    }
    inputNomeAtividade.value = ' ';
    inputNotaAtividade.value = ' ';
    
}
