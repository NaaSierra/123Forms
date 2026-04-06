// Este log DEVE aparecer no console (F12) se o link estiver funcionando
console.log("--- HYPE SYNC: SCRIPT CARREGADO COM SUCESSO ---");

(function() {
    function sync() {
        // Seletores baseados no seu HTML real da gamescom
        const inputEmpresa = document.querySelector('[data-id="120890147"] input');
        const inputNome = document.querySelector('[data-id="120890282"] input');
        
        // Localiza onde o texto deve aparecer usando as classes
        const displayEmpresa = document.querySelector('.hype-company');
        const displayNome = document.querySelector('.hype-name');

        if (displayEmpresa && inputEmpresa) {
            displayEmpresa.innerText = inputEmpresa.value.trim() || "________________";
        }
        if (displayNome && inputNome) {
            displayNome.innerText = inputNome.value.trim() || "________________";
        }
    }

    // Roda a cada 500ms para garantir que funcione mesmo se o formulário atualizar
    setInterval(sync, 500);
})();
