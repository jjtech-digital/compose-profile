<template>
    <header class="header header-area">
        <div class="header-bottom" :class="{'is-sticky': isSticky}">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col">
                        <nuxt-link to="/" class="brand-logo">
                            <div class="logo-wrapper">
                                <img src="/images/logo/ct_logom.png" alt="brand logo" height="44" />
                                <p>Compose Tech</p>
                                
                            </div>
                        </nuxt-link>
                    </div>
                    <div class="col-auto">
                        <div class="main-menu-wrapper">
                            <nav class="d-none d-lg-block">
                                <Navigation />
                            </nav>
                            <nuxt-link to="#contact" class="btn btn-warning btn-hover-warning btn-lg d-none d-md-block">
                                Contact Now <i class="icofont-arrow-right"></i>
                            </nuxt-link>
                            <button class="btn btn-warning offcanvas-toggler d-lg-none" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                <span class="line"></span>
                                <span class="line"></span>
                                <span class="line"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        components: {
            Navigation: () => import("@/components/Navigation"),
        },

        data() {
            return {
                isSticky: false,
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },

        methods: {
            // offcanvas mobile-menu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>