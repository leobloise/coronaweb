const span = document.querySelector('.burger')

function closed(span, menu) {
    
    if(span.classList.contains('close')) {
        span.classList.remove('close');
        menu.classList.add('closed')
        setTimeout(() => { 
            menu.classList.remove('show')
            menu.classList.remove('closed')
        }, 900)

        return true;
    }

    return false;

}

span.addEventListener('click', event => {

    let menu = document.querySelector('.menu')

    if(closed(span, menu)) {
        return true;
    } else {
        span.classList.add('close')
        document.querySelector('.menu').classList.add('show')  
        return true;
    }
})
