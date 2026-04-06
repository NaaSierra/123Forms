// Este log DEVE aparecer no console se o link estiver certo
console.log("--- HYPE CONTRACT SYNC ATIVADO ---");

setInterval(function() {
    // IDs extraídos do seu HTML real da gamescom
    const inputEmpresa = document.getElementById("text-00000010");
    const inputNome = document.getElementById("text-00000020");
    
    // Alvos no seu Bloco HTML
    const displayEmpresa = document.getElementById("display_empresa");
    const displaySignatario = document.getElementById("display_signatario");

    if (displayEmpresa && inputEmpresa) {
        displayEmpresa.innerText = inputEmpresa.value.trim() || "________________";
    }

    if (displaySignatario && inputNome) {
        displaySignatario.innerText = inputNome.value.trim() || "________________";
    }
}, 500); // Tenta atualizar a cada meio segundo
