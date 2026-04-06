(function() {
    function getFormValue(dataId) {
        // Busca o elemento pelo data-id (único e estável no seu HTML)
        var container = document.querySelector('[data-id="' + dataId + '"]');
        if (!container) return null;
        
        var input = container.querySelector('input, textarea, select');
        return input ? input.value : null;
    }

    function updateContractDisplay() {
        // IDs confirmados no seu arquivo HTML
        var empresaVal = getFormValue("120890147");  // Company Name
        var nomeVal = getFormValue("120890282");     // Full Name

        var displayEmp = document.getElementById("display_empresa");
        var displaySig = document.getElementById("display_signatario");

        // Atualiza se encontrar os campos de destino no HTML Block
        if (displayEmp && empresaVal !== null) {
            displayEmp.innerText = empresaVal || "________________";
        }
        if (displaySig && nomeVal !== null) {
            displaySig.innerText = nomeVal || "________________";
        }
    }

    // Monitora qualquer digitação ou mudança no formulário inteiro
    document.addEventListener('input', function() {
        updateContractDisplay();
    });

    // Monitora cliques (como o botão "Próxima Página") para forçar atualização
    document.addEventListener('click', function() {
        setTimeout(updateContractDisplay, 100);
    });

    // Loop de segurança para garantir atualização constante (ex: quando muda de página)
    setInterval(updateContractDisplay, 1000);
})();
