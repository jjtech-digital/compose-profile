<template>
    <div>
        <slot />
        <button class="scroll-top" @click="scrollToTop" :class="{ 'show': isVisible }">
            <i class="icofont-arrow-up"></i>
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isVisible: false,
            }
        },
        methods: {
            scrollToTop() {
                window.scroll({
                    top: 0,
                    behavior: "smooth",
                })
            }
        },
        mounted() {
            window.addEventListener("scroll", () => {
                let scroll = window.scrollY;
                if (scroll >= 500) {
                    this.isVisible = true;
                }
                else {
                    this.isVisible = false;
                }
            })
        }
    }
</script>
