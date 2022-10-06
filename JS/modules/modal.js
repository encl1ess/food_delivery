function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    console.log(modalTimerId);
    if(modalTimerId)
        clearInterval(modalTimerId);
}
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalBtns = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalBtns.forEach(curr => {
        curr.addEventListener('click', () => openModal(modalSelector,modalTimerId));
    });
    
    modal.addEventListener('click', event => {
        if (event.target === modal || event.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.style.display != 'none') {
            closeModal(modalSelector);
        }
    });


    

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector,modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);



}

export default modal;
export {closeModal, openModal};