async function buscarEndereco(){
    const consultaCEP= await fetch('https://viacep.com.br/ws/49091050/json')
    const consultaCEPConvertida = await consultaCEP.json()
    console.log(consultaCEP)
}


buscarEndereco();