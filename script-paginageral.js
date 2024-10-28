    <script>
        const rotulos = document.querySelectorAll('.rotulo');
        const opcoes = document.querySelectorAll('.opcao');

        // Função para exibir todas as opções inicialmente
        function mostrarTodasAsOpcoes() {
            opcoes.forEach(opcao => {
                opcao.style.display = 'block'; // Mostra todas as opções
            });
        }

        // Chama a função ao carregar a página
        mostrarTodasAsOpcoes();

        rotulos.forEach(rotulo => {
            rotulo.addEventListener('click', () => {
                const selectedValue = rotulo.getAttribute('data-value');

                opcoes.forEach(opcao => {
                    const values = opcao.getAttribute('data-values').split(',');

                    if (values.includes(selectedValue)) {
                        opcao.style.display = 'block'; // Mostra a opção
                    } else {
                        opcao.style.display = 'none'; // Oculta a opção
                    }
                });
            });
        });
    </script>
