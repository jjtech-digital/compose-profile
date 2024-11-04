<template>
    <div class="main-container">
        <Header />
        <OffCanvasMobileMenu />
        <Breadcrumb title="Contact Us" active-title="Contact Us" />
        <ContactWrapper />
        <Footer />
    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            ContactWrapper: () => import('@/components/ContactWrapper'),
            Footer: () => import('@/components/Footer'),
        },
    };
</script>


