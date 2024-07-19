const simples = document.querySelector('#simples');
const compostos = document.querySelector('#compostos');
const calcular = document.querySelector('#button-calculate');
const juros = document.querySelector('#resultado');
const valorFinal = document.querySelector('#valor-montante');
const limparTudo = document.querySelector('#limpar');
const divCont = document.querySelectorAll('.cont-border');
const icons = document.querySelectorAll('.icons');
const simboloReal = document.querySelector('#simbolo-real');
const simboloPorcetagem = document.querySelector('#simbolo-porcetagem');
const simboloMes = document.querySelector('#simbolo-mes');
const mes = document.querySelector('#mes');
const boxRadio = document.querySelectorAll('.box-radio');
const preencher = document.querySelector('#preencher');


calcular.addEventListener('click', function() { 
    if(verificarCampoVazio()) {
        calculoJuros();
    }
   
})

function verificarCampoVazio() {
    const capitalVazio = document.querySelector('#valor-capital').value;
    const mesVazio = document.querySelector('#mes').value;
    const porcetagemVazia = document.querySelector('#porcetagem').value;

    let algumCampoVazio = false;

    if(capitalVazio === '' && mesVazio === '' && porcetagemVazia === '') {

        icons.forEach(icon => {
            icon.style.backgroundColor = '#d73328';
        })
        divCont.forEach(div => {
            div.style.borderColor = '#d73328';
    
        })
        
        algumCampoVazio = true;
       
    }
    if(mesVazio === '' && porcetagemVazia === '') {
        divCont[1].style.borderColor = '#d73328';
        divCont[2].style.borderColor = '#d73328';
        simboloMes.style.backgroundColor = '#d73328';
        simboloPorcetagem.style.backgroundColor = '#d73328';
        
        algumCampoVazio = true;

       

    }
    if(capitalVazio === '' && mesVazio === '') {
        divCont[0].style.borderColor = '#d73328';
        divCont[1].style.borderColor = '#d73328';
        simboloMes.style.backgroundColor = '#d73328';
        simboloReal.style.backgroundColor = '#d73328';
        
        algumCampoVazio = true;

       
    }
    if(capitalVazio === '' && porcetagemVazia === '') {
        divCont[0].style.borderColor = '#d73328';
        divCont[2].style.borderColor = '#d73328';
        simboloPorcetagem.style.backgroundColor = '#d73328';
        simboloReal.style.backgroundColor = '#d73328';
        
        algumCampoVazio = true;

       
    }
    if(capitalVazio === '') {
        divCont[0].style.borderColor = '#d73328';
        simboloReal.style.backgroundColor = '#d73328';
        
        algumCampoVazio = true;

          
    }

    if(mesVazio === '') {
        divCont[1].style.borderColor = '#d73328';
        simboloMes.style.backgroundColor = '#d73328';
        
        algumCampoVazio = true;

       
    }

    if(porcetagemVazia === '') {
        divCont[2].style.borderColor = '#d73328';
        simboloPorcetagem.style.backgroundColor = '#d73328';
        
        algumCampoVazio = true;

      
    }

    if(!simples.checked && !compostos.checked) {
       algumCampoVazio = true;
       
    }
    
    preencher.style.display = algumCampoVazio ? 'block' : 'none';
    return !algumCampoVazio;
    
}

function calculoJuros() {
    const capital = parseFloat(document.querySelector('#valor-capital').value);
    const prazo = parseFloat(document.querySelector('#mes').value);
    const taxaDeJuros = parseFloat(document.querySelector('#porcetagem').value) / 100;
    
    if(simples.checked) {
        const calcularJuros = capital * taxaDeJuros * prazo;
        juros.textContent = `R$ ${calcularJuros.toFixed(2)}`;
        const montante = capital + calcularJuros;
        valorFinal.textContent = `R$ ${montante.toFixed(2)}`;
    
    } else if(compostos.checked) {
        const montante = capital * Math.pow((1 + taxaDeJuros), prazo);
        juros.textContent = `R$ ${montante.toFixed(2)}`;
        
    }
    icons.forEach(icon => {
        icon.style.backgroundColor = '#9abed5';
    })
    divCont.forEach(div => {
        div.style.borderColor = '#38393a';
    })
    preencher.style.display = 'none';
}



limparTudo.addEventListener('click', () => {
    document.querySelector('#mes').value = '';
    document.querySelector('#porcetagem').value = '';
    document.querySelector('#valor-capital').value = '';
    simples.checked = false;
    compostos.checked = false;
    juros.textContent = 'R$ 0';
    valorFinal.textContent = 'R$ 0';
    preencher.style.display = 'none';
    
    
    
   boxRadio.forEach(box => {
        box.style.borderColor = '#38393a';
   })

   icons.forEach(icon => {
        icon.style.backgroundColor = '#9abed5';
    })

    divCont.forEach(div => {
        div.style.borderColor = '#38393a';
    })
    
    
})


simples.addEventListener('click', () => {
    boxRadio[0].style.borderColor = '#d7da2f';
    boxRadio[1].style.borderColor = '#38393a';

})

compostos.addEventListener('click', () => {
    boxRadio[1].style.borderColor = '#d7da2f';
    boxRadio[0].style.borderColor = '#38393a';
})

