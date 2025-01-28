<template>
    <div class="brand-section" data-aos="fade-up" data-aos-delay="100">
        <div class="container">
            <div class="brand-card bg-cover">
                <p class="brand-title">Working with innovators worldwide</p>
                <swiper :speed="1000" :breakpoints="brandCarousel.breakpoints">
                    <swiper-slide class="brand-item" v-for="(brand, index) in brandItems" :key="index">
                        <a :href="brand.url">
                            <img class="brand-before" :src="brand.imgSrc" :alt="brand.alt" />
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
                    imgSrc: "/images/brand-logo/brand-logo-1.png",

                    url: "https://commercetools.com/",
                    alt: "commercetools"
                },
                {
                    imgSrc: "/images/brand-logo/brand-logo-2.png",

                    url: "https://strapi.io/",
                    alt: "Strapi"
                },
                {
                    imgSrc: "/images/brand-logo/brand-logo-3.png",

                    url: "https://squidex.io/",
                    alt: "Squidex"
                },
                {
                    imgSrc: "/images/brand-logo/brand-logo-4.png",

                    url: "https://www.builder.io/",
                    alt: "Builder.io"
                },
                {
                    imgSrc: "/images/brand-logo/brand-logo-5.png",

                    url: "https://www.algolia.com/",
                    alt: "Algolia"
                },
            ]
        }
    },
};
</script>
