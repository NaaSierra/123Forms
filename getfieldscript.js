(function() {
    function atualizarAssinatura() {
        // IDs extraídos do seu HTML real
        const campoEmpresa = document.querySelector('[data-id="120890147"] input');
        const campoNome = document.querySelector('[data-id="120890282"] input');
        
        const displayEmpresa = document.getElementById('display_empresa');
        const displaySignatario = document.getElementById('display_signatario');

        // Atualiza a Empresa (for and on behalf of)
        if (campoEmpresa && displayEmpresa) {
            displayEmpresa.innerText = campoEmpresa.value || "________________";
        }

        // Atualiza o Signatário (Signed by)
        if (campoNome && displaySignatario) {
            displaySignatario.innerText = campoNome.value || "________________";
        }
    }

    // Ouve a digitação em tempo real na página
    document.addEventListener('input', atualizarAssinatura);

    // Garante que o texto apareça mesmo que o navegador preencha automaticamente
    window.addEventListener('load', atualizarAssinatura);
    setInterval(atualizarAssinatura, 1000); 
})();
