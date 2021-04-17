import Products from "../components/Products";

export default class HomePage{
    constructor(){
        new Products();

        const products_slider = document.getElementById("slider-products");
        this.sliderPorducts(products_slider)
    }
    sliderPorducts(products_slider){
        const slider = new Swiper(products_slider, {
            slidesPerView: 1,
            spaceBetween: 10,
            loop:true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                },
            }
        });
    }
}