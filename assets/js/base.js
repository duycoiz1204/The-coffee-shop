const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function render(page, container) {
    const template = document.createElement('template');
    const ajax = new XMLHttpRequest();

    ajax.open('GET', `./components/${page}.html`, false);
    ajax.send();
    template.innerHTML += ajax.responseText;

    $(container).append(template.content);
}

function toast({ title = '', message = '', type = 'success' }) {
    const main = $('#toast');
    const toast = document.createElement('div');
    const icons = {
        success: 'fa-circle-check'
    }

    // Auto remove toast
    const autoRemoveId = setTimeout(() => {
        main.removeChild(toast);
    }, 5000)

    // Remove toast when the close btn is clicked
    toast.onclick = (e) => {
        if (e.target.closest(".toast__close")) {
            main.removeChild(toast);
            clearTimeout(autoRemoveId);
        }
    }

    toast.classList.add('toast', `toast--${type}`);
    toast.innerHTML = `
        <div class="toast__icon">
            <i class="fa-solid ${icons[type]}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fa-solid fa-xmark"></i>
        </div>
    `
    main.appendChild(toast);
}