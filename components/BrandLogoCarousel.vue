<template>
    <div class="brand-section">
        <div class="container">
            <div class="brand-card">
                <p class="brand-title">Working with innovators worldwide</p>

                <div class="brand-row">
                    <div class="brand-item" v-for="(brand, index) in brandItems" :key="index">
                        <a :href="brand.url">
                            <img :src="brand.imgSrc" :alt="brand.alt" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            brandItems: [
                { imgSrc: "/images/brand-logo/brand-logo-1.png", url: "https://commercetools.com/", alt: "commercetools" },
                { imgSrc: "/images/brand-logo/brand-logo-6.png", url: "https://www.contentful.com/", alt: "Contentful" },
                { imgSrc: "/images/brand-logo/brand-logo-7.png", url: "https://squidex.io/", alt: "ContentStack" },
                { imgSrc: "/images/brand-logo/brand-logo-4.png", url: "https://www.builder.io/", alt: "Builder.io" },
                { imgSrc: "/images/brand-logo/brand-logo-5.png", url: "https://www.algolia.com/", alt: "Algolia" }
            ]
        };
    },
};
</script>

