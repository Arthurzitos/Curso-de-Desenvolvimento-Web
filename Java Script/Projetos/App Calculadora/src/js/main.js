function calcular(tipo, valor) {
    //console.log(tipo, valor)
    if (tipo === 'acao') {

        if (valor === 'c') {
            // limpar o visor (id resultado)
            document.getElementById('resultado').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor
        }

        if (valor === '=') {
            var valorCampo = eval(document.getElementById('resultado').value)
            //console.log(eval(valorCampo))
            document.getElementById('resultado').value = valorCampo
        }

    } else if (tipo === 'valor') {
         document.getElementById('resultado').value += valor
         
    }
}