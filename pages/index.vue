<template>
    <div class="main-container">
        <Header />
        <OffCanvasMobileMenu />
        <Hero />
        <BrandLogoCarousel />
        <ServiceOne /> 
        <WorkingProcess />
        <AboutOne />
        <ContactWrapper />
        <Footer />
    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Hero: () => import('@/components/Hero'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            ServiceOne: () => import('@/components/ServiceOne'),
            WorkingProcess: () => import('@/components/WorkingProcess'),
            AboutOne: () => import('@/components/AboutOne'),
            CaseStudies: () => import('@/components/CaseStudies'),
            TeamSection: () => import('@/components/TeamSection'),
            FaqSection: () => import('@/components/FaqSection'),
            TestimonialOne: () => import('@/components/TestimonialOne'),
            BlogOne: () => import('@/components/BlogOne'),
            ContactWrapper: () => import('@/components/ContactWrapper'),
            Footer: () => import('@/components/Footer')
        }
    }
</script>


