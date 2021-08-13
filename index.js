 
   function tabela(n) { // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    
    let novaTabela = [];
    for (let i = 0; i <= n; i++) {
        novaTabela[i] = [];
        for (let j = 0; j <= n; j++) {
            novaTabela[i][j] = j*i
        }
    }
    console.table(novaTabela)
}