(function() {
    function iniciarSincronizacao() {
        // IDs que você identificou no Inspector
        var idEmpresa = "text-00000010"; 
        var idSignatario = "text-00000020"; 

        var inputEmp = document.getElementById(idEmpresa);
        var inputSig = document.getElementById(idSignatario);

        // Verifica se os campos existem na página atual
        if (inputEmp && inputSig) {
            var atualizarTexto = function() {
                var displayEmp = document.getElementById("display_empresa");
                var displaySig = document.getElementById("display_signatario");

                if (displayEmp) displayEmp.innerText = inputEmp.value || "________________";
                if (displaySig) displaySig.innerText = inputSig.value || "________________";
            };

            // Escuta a digitação para atualizar o contrato instantaneamente
            inputEmp.addEventListener("input", atualizarTexto);
            inputSig.addEventListener("input", atualizarTexto);
            
            // Executa uma vez para preencher caso o navegador tenha auto-completado
            atualizarTexto();
        } else {
            // Se os campos ainda não carregaram, tenta novamente em meio segundo
            setTimeout(iniciarSincronizacao, 500);
        }
    }

    // Garante que o script rode após o carregamento da página
    if (document.readyState === "complete") {
        iniciarSincronizacao();
    } else {
        window.addEventListener("load", iniciarSincronizacao);
    }
})();
