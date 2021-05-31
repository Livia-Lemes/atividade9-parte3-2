const a = parseInt(prompt('digite o primero numero'))

const sinalDaOperacao =prompt('digite o sinal da conta que deseja efetuar')

const b = parseInt(prompt('digite o segundo numero'))




function resultadoConta(a, sinalDaOperacao, b){
    if(sinalDaOperacao === '+'){
       return a+b;
    }
    else if(sinalDaOperacao === '-'){
        return  a-b;
    }
    else if(sinalDaOperacao === '*'){
        return a*b;
    }
     else if(sinalDaOperacao == '/'){
        return a/b;
    }
    else{
        return null
    }

}

 const resultado = resultadoConta(a, sinalDaOperacao, b)

if(resultado!==null){
    alert(`O resultado é ${resultado}`)
}
else{
    alert(`opção inválida`)
}

