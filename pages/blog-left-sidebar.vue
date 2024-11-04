<template>
    <div class="main-container">
        <Header />
        <OffCanvasMobileMenu />
        <Breadcrumb title="Blog left sidebar" active-title="Blog left sidebar" />
        <BlogWrapper orderClass="order-lg-first" />
        <Footer />
    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            BlogWrapper: () => import('@/components/BlogWrapper'),
            Footer: () => import('@/components/Footer'),
        }
    };
</script>


