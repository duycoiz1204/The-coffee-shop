function orderHistory() {
    const modalOrder = $('.modal-order');

    $$('.orders__item').forEach((item) => {
        item.addEventListener('click', () => {
            modalOrder.classList.add('modal-order--show');
        })
    })

    $('.modal-order__close').onclick = () => {
        modalOrder.classList.remove('modal-order--show');
    }

    modalOrder.onclick = (e) => {
        if (e.target == modalOrder) {
            modalOrder.classList.remove('modal-order--show');
        }
    }
}

orderHistory();