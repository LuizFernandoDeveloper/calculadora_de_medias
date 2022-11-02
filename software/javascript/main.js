
let linhas = ' ';

const  form = document.getElementById('form-atividade');
const imgAprovado = '<img src="../images/aprovado.png" alt="Emoji Celebridade">'
const imgReprovado = '<img src="../images/reprovado.png" alt="Emoji Decepcionado">';
const inputNomeAtividade = document.getElementById('nome-atividade');
const inputNotaAtividade = document.getElementById('nota-atividade');
const nomeAtividadeArray = [];
const notaAtividadeArray = [];

form.addEventListener('submit', function(e){

    e.preventDefault();

    adicionaLinha();
    controleDaMedia();
    atualizaTabela();
    

});

function adicionaLinha() { 

    
    
    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
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
    const atualizaResultado = document.querySelector('.resultado');
    const atualizaMediaFinal = document.querySelector('.media-final');
    nomeAtividadeArray.push(inputNomeAtividade.value);
    notaAtividadeArray.push(parseFloat(inputNotaAtividade.value));
    
    notaAtividadeArray.forEach(notas =>{
    
        somaMedia = somaMedia + notas;

    });

    resultado  = somaMedia / notaAtividadeArray.length;
    
    atualizaMediaFinal.innerHTML = resultado;

    if(notaAtividadeArray.length == 1){

        atualizaMediaFinal.innerHTML = 'Notas insuficiente';
        atualizaResultado.innerHTML =  'Resultado';
        
    }
    else{

        atualizaResultado.innerHTML =  resultado  < 7 ? 'Reprovado': 'Aprovado';

    }
    
    inputNomeAtividade.value = ' ';
    inputNotaAtividade.value = ' ';
}
