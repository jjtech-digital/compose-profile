<template>
    <div class="main-container">
        <Header />
        <OffCanvasMobileMenu />
        <Breadcrumb title="Blog Right Sidebar" active-title="Blog Right Sidebar" />
        <BlogWrapper />
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
            Footer: () => import('@/components/Footer')
        }
    };
</script>


