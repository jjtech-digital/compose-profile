<template>
    <div class="brand-section" data-aos="fade-up" data-aos-delay="100">
        <div class="container">
            <div class="brand-card bg-cover">
                <p class="text-center">Trusted by <span class="text-gradient">8,980+</span> of The World's Best Organization.</p>
                <swiper
                    :speed="1000"
                    :breakpoints="brandCarousel.breakpoints"
                >
                    <swiper-slide class="brand-item" v-for="(brand, index) in brandItems" :key="index">
                        <a :href="brand.url">
                            <img class="brand-before" :src="brand.imgSrc" :alt="brand.alt" />
                            <img class="brand-after" :src="brand.hoverImgSrc" :alt="brand.alt" />
                        </a>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"

    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                brandCarousel: {
                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                        },
                        480: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        },
                    },
                },

                brandItems: [
                    {
                        imgSrc: "/images/brand-logo/1.png",
                        hoverImgSrc: "/images/brand-logo/1.1.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand-logo/2.png",
                        hoverImgSrc: "/images/brand-logo/2.1.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand-logo/3.png",
                        hoverImgSrc: "/images/brand-logo/3.1.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand-logo/4.png",
                        hoverImgSrc: "/images/brand-logo/4.1.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand-logo/2.png",
                        hoverImgSrc: "/images/brand-logo/2.1.png",
                        url: "#",
                        alt: "brand name"
                    },
                ]
            }
        },
    };
</script>
