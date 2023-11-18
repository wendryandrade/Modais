function abrirModal(modalId){
    const modal = document.getElementById(modalId)
    modal.classList.add('exibir-modal')

    modal.addEventListener('click', (e) =>{
        if (e.target.id == 'modal-container' || e.target.id == "fechar"){
            modal.classList.remove('exibir-modal')
            localStorage.fechaModal = 'modal-container'
        }
    })
}