<template>
    <div class="offcanvas-mobile-menu" id="offcanvas-menu">
        <div class="mobile-menu-overlay" @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"></div>
        <div class="inner">
            <div class="mobile-header">
                <div class="logo">
                    <nuxt-link to="/">
                        <div class="logo-wrapper">
                                <img src="/images/logo/ct_logom.png" alt="brand logo" height="44" />
                                <p>Compose Tech</p>
                            </div>
                    </nuxt-link>
                </div>
                <button class="mobile-close-btn" @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"></button>
            </div>
            <div class="menu-content">
                <MobileNavigation />
            </div>

            <div class="offcanvas-social">
                <ul>
                    <li>
                        <a href="#">
                            <i class="icofont-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#"><i class="icofont-twitter"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="icofont-skype"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="icofont-linkedin"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            MobileNavigation: () => import('@/components/MobileNavigation'),
        },
        
        methods: {
            // offcanvas menu close
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            }
        }
    };
</script>