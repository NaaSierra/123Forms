(function() {
    function vincularContrato() {
        // IDs que você confirmou no Inspector
        var idEmpresa = "text-00000010"; 
        var idSignatario = "text-00000020"; 

        // Tenta encontrar os inputs e os locais de exibição
        var inputEmp = document.getElementById(idEmpresa);
        var inputSig = document.getElementById(idSignatario);
        var displayEmp = document.getElementById("display_empresa");
        var displaySig = document.getElementById("display_signatario");

        // Se encontrou os alvos de exibição, tenta preencher
        if (displayEmp || displaySig) {
            
            var atualizar = function() {
                if (inputEmp && displayEmp) displayEmp.innerText = inputEmp.value || "________________";
                if (inputSig && displaySig) displaySig.innerText = inputSig.value || "________________";
            };

            // Se os inputs estiverem na mesma página, adiciona o evento de digitação
            if (inputEmp) inputEmp.addEventListener("input", atualizar);
            if (inputSig) inputSig.addEventListener("input", atualizar);

            // Tenta buscar do armazenamento local caso o usuário tenha vindo de outra página
            atualizar();
        }
    }

    // Executa ao carregar e monitora mudanças no formulário (navegação entre páginas)
    var observer = new MutationObserver(vincularContrato);
    observer.observe(document.body, { childList: true, subtree: true });
    
    window.addEventListener("load", vincularContrato);
})();
