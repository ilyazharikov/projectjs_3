function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = "hidden";

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
    
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = "";
}

function modals(TriggerModal, modalSelector, modalTimerId) {
    // Modal 

    const btnModal = document.querySelectorAll(TriggerModal),
          modal = document.querySelector(modalSelector);

    btnModal.forEach(btn => {
        btn.addEventListener('click',() => openModal(modalSelector, modalTimerId));
    });
    

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalBySroll() {
        if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalBySroll);
        }
    }

    window.addEventListener('scroll', showModalBySroll);
}

export default modals;
export {closeModal};
export {openModal};