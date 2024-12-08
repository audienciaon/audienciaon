<script>
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
});
</script>
