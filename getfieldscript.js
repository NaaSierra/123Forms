(function() {
    // IDs extraídos do seu HTML real
    const ID_NOME = "120890282";
    const ID_EMPRESA = "120890147";

    function forceUpdate() {
        // Localiza os inputs originais
        const inputNome = document.querySelector(`[data-id="${ID_NOME}"] input`);
        const inputEmpresa = document.querySelector(`[data-id="${ID_EMPRESA}"] input`);
        
        // Localiza o bloco do contrato (data-id do seu HTML block)
        const contratoBlock = document.querySelector('[data-id="120890676"]');

        if (contratoBlock) {
            let html = contratoBlock.innerHTML;

            // Captura os valores ou mantém o padrão
            const nomeVal = (inputNome && inputNome.value) ? inputNome.value : "________________";
            const empresaVal = (inputEmpresa && inputEmpresa.value) ? inputEmpresa.value : "________________";

            // Alvo específico via classe (mais estável que ID no 123forms)
            const targetNome = contratoBlock.querySelector('.hype-sync-name');
            const targetEmpresa = contratoBlock.querySelector('.hype-sync-company');

            if (targetNome) targetNome.innerText = nomeVal;
            if (targetEmpresa) targetEmpresa.innerText = empresaVal;
        }
    }

    // Executa sempre que houver digitação
    document.addEventListener('input', forceUpdate);
    
    // Executa repetidamente para garantir que funcione se a página carregar depois
    setInterval(forceUpdate, 1000);
})();
