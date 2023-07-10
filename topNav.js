
function nav() {
    const two_span = document.querySelector('.two_span')
    const btn_room_nav = document.querySelector(".plus");
    const list_room_nav = document.querySelector(".accordeon_nav_rooms");
    const span_none = document.querySelector(".span_none");
    btn_room_nav.addEventListener("click", () => {
        list_room_nav.classList.toggle("accordeon_nav");
        span_none.classList.toggle("display_span_nav");
    })
    const btn_blog_nav = document.querySelector(".plus2");
    const list_blog_nav = document.querySelector(".accordeon_nav_blog");
    const span_none2 = document.querySelector(".span_none2");
    btn_blog_nav.addEventListener("click", () => {
        list_blog_nav.classList.toggle("accordeon_nav2");
        span_none2.classList.toggle("display_span_nav2");
    })
    const burger = document.getElementById('burger');
    let menu = document.getElementById('nav_links');
    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    })
    let links = document.getElementsByClassName('links_menu');

    for (let link of links) {
        link.addEventListener('click', () => {
            for (let linkcolorbase of links) {
                linkcolorbase.style.color = '#777';
            }
            link.style.color = 'white';
            for (let lignered of links) {
                lignered.nextElementSibling.style.opacity = '0'
            }
            link.nextElementSibling.style.opacity = '1'
        });
    }
}

export {nav};








