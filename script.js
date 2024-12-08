function incluirArquivo(url, elementoID) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementoID).innerHTML = data;
        });
}

document.addEventListener("DOMContentLoaded", function() {
    incluirArquivo('header.html', 'header');
    incluirArquivo('footer.html', 'footer');

    // Captura o nome do arquivo atual da URL
    const paginaAtual = window.location.pathname.split('/').pop();
    
    // Se a página não for index.html, carrega o conteúdo da página dentro de /on/
    if (paginaAtual !== "index.html") {
        const conteudoUrl = '/on/' + paginaAtual;
        incluirArquivo(conteudoUrl, 'conteudo-principal');
    }
});
