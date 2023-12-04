async function buscarEndereco(cep){
    const mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
       const consultaCEP= await fetch(`https://viacep.com.br/ws/${cep}/json`)
        const consultaCEPConvertida = await consultaCEP.json()
        if(consultaCEPConvertida.erro){
            throw Error('CEP não existente')
        }
        const cidade = document.getElementById('cidade');
        const rua = document.getElementById('endereco');
        const estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade;
        rua.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida
    } catch(erro){
        console.log(erro)
        mensagemErro.innerHTML = `<p>CEP invalido. tente novamente!</p>`
    }
    
}
const cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscarEndereco(cep.value))
buscarEndereco();