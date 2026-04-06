(function() {
    console.log("Hype Sync: Script iniciado.");

    function atualizarContrato() {
        // IDs exatos encontrados no seu HTML:
        // Empresa: data-id="120890147" ou id="text-00000010"
        // Nome: data-id="120890282" ou id="text-00000020"
        
        const inputEmpresa = document.getElementById("text-00000010") || document.querySelector('[data-id="120890147"] input');
        const inputNome = document.getElementById("text-00000020") || document.querySelector('[data-id="120890282"] input');
        
        const displayEmpresa = document.getElementById("display_empresa");
        const displaySignatario = document.getElementById("display_signatario");

        // Verifica se encontrou os destinos no bloco HTML
        if (!displayEmpresa || !displaySignatario) {
            // Se não encontrar os spans, o script para aqui para não dar erro
            return; 
        }

        // Atualiza o texto. Se o campo estiver vazio, mantém os sublinhados.
        if (inputEmpresa) {
            const valorEmp = inputEmpresa.value.trim();
            displayEmpresa.innerText = valorEmp !== "" ? valorEmp : "________________";
        }

        if (inputNome) {
            const valorNome = inputNome.value.trim();
            displaySignatario.innerText = valorNome !== "" ? valorNome : "________________";
        }
    }

    // Tenta atualizar sempre que o utilizador digita
    document.addEventListener('input', atualizarContrato);

    // Backup: Força a atualização a cada 500ms (ajuda se o formulário mudar de estado)
    setInterval(atualizarContrato, 500);
})();
