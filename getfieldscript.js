(function() {
    function log(msg) {
        console.log("[Hype Contract Sync]: " + msg);
    }

    function sync() {
        // IDs extraídos do seu HTML real
        var idEmpresa = "120890147";
        var idSignatario = "120890282";

        // Localiza os inputs usando o atributo data-id que é fixo no 123FormBuilder
        var inputEmp = document.querySelector('[data-id="' + idEmpresa + '"] input');
        var inputSig = document.querySelector('[data-id="' + idSignatario + '"] input');
        
        // Localiza os spans onde o texto deve aparecer
        var displayEmp = document.getElementById("display_empresa");
        var displaySig = document.getElementById("display_signatario");

        if (displayEmp || displaySig) {
            var atualizar = function() {
                if (inputEmp && displayEmp) {
                    displayEmp.innerText = inputEmp.value || "________________";
                }
                if (inputSig && displaySig) {
                    displaySig.innerText = inputSig.value || "________________";
                }
            };

            // Adiciona os escutadores de eventos se os inputs existirem na página atual
            if (inputEmp && !inputEmp.getAttribute('data-sync-active')) {
                inputEmp.addEventListener("input", atualizar);
                inputEmp.setAttribute('data-sync-active', 'true');
                log("Sincronização ativada para Empresa");
            }
            if (inputSig && !inputSig.getAttribute('data-sync-active')) {
                inputSig.addEventListener("input", atualizar);
                inputSig.setAttribute('data-sync-active', 'true');
                log("Sincronização ativada para Signatário");
            }

            // Sempre tenta atualizar (necessário para quando muda de página)
            atualizar();
        }
    }

    // O 123FormBuilder reconstrói a página, então precisamos rodar o script repetidamente
    log("Script carregado. Iniciando monitoramento...");
    setInterval(sync, 800);
})();
