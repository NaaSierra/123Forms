window.onload = function() {
    // IDs dos campos que você informou
    var idSignatario = "120890282"; 
    var idEmpresa = "120890147";

    // Função para atualizar o texto no HTML Block
    function atualizarContrato() {
        var nome = document.querySelector('[name="control' + idSignatario + '"]').value;
        var empresa = document.querySelector('[name="control' + idEmpresa + '"]').value;
        
        if(document.getElementById("display_signatario")) {
            document.getElementById("display_signatario").innerText = nome;
        }
        if(document.getElementById("display_empresa")) {
            document.getElementById("display_empresa").innerText = empresa;
        }
    }

    // Escuta a digitação nos campos
    document.querySelector('[name="control' + idSignatario + '"]').addEventListener("input", atualizarContrato);
    document.querySelector('[name="control' + idEmpresa + '"]').addEventListener("input", atualizarContrato);
};
