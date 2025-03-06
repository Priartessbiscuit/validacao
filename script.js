document.getElementById('produto-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const quantidade = document.getElementById('quantidade').value;
    const valor = document.getElementById('valor').value;
    const mensagemErro = document.getElementById('mensagem-erro');
    const produtoDados = document.getElementById('produto-dados');

    if (nome === '') {
        mensagemErro.textContent = 'O campo nome é obrigatório.';
    } else {
        mensagemErro.textContent = '';

        const produto = {
            nome: nome,
            quantidade: quantidade,
            valor: valor
        };

        produtoDados.innerHTML = `
            <h2>Dados do Produto</h2>
            <p>Nome: ${produto.nome}</p>
            <p>Quantidade: ${produto.quantidade}</p>
            <p>Valor: ${produto.valor}</p>
        `;
    }
});
