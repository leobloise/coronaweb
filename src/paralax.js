function getAllElementsToShow() {
    return document.querySelectorAll('.show_on_scroll')
}

function getVisionCoord() {
    return(window.scrollY)
}

window.onload = function(event) {
    window.allelementstoshow = getAllElementsToShow()
}

document.onscroll = function(event) {
    
    let window_position = getVisionCoord()

    getAllElementsToShow().forEach( element => {
        
        let element_position = element.getBoundingClientRect().y;
        
        if( element_position <= window_position ) {
            element.classList.remove('show_on_scroll')
        }

    })



}