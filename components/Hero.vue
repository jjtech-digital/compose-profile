<template>
    <section class="hero-section" id="home">
        <img class="shape shape1" src="/images/hero/shape1.png" alt="404" />
        <img class="shape shape2" src="/images/hero/shape2.png" alt="404" />
        <img class="shape particle1" src="/images/hero/particle1.png" alt="404" />
        <img class="shape particle2" src="/images/hero/particle2.png" alt="404" />
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-xl-6 position-static">
                    <div class="hero-content">
                        <h2 class="title">Transforming Challenges into Enterprise-Grade Solution.</h2>
                        <p><span class="hr d-none d-xl-block"></span> Partner with us for customized, robust, and scalable applications that align with your business goals.</p>
                        <div class="hero-form position-relative">
                            <nuxt-link to="#contact" >
                                <button class="btn btn-warning">
                                    Contact Now
                                </button>
                            </nuxt-link>
                        </div>
                        <img class="particle3" src="/images/hero/particle3.png" alt="particle2" />
                    </div>
                </div>
                <div class="col-lg-7 col-xl-6 position-static">
                    <div class="hero-img">
                        <img class="animate-one" src="/images/hero/1.png" alt="404" data-aos="zoom-in" data-aos-delay="100" />
                        <div class="position-absolute animate-two">
                            <img data-aos="fade-up" data-aos-delay="600" src="/images/hero/2.png" alt="404" />
                        </div>
                        <div class="position-absolute animate-three">
                            <img data-aos="fade-down" data-aos-delay="400" src="/images/hero/3.png" alt="404" />
                        </div>
                    </div>
                    <div class="hero-img-mobile">
                        <img src="/images/hero/mobile.png" alt="images-not_found" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>