<template>
    <ul class="main-menu">
        <li>
            <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/service-details">Service</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/case-details">Case Details</nuxt-link>
        </li>
        <li class="has-children">
            <nuxt-link to="/blog-left-sidebar">Blog</nuxt-link>
            <ul class="sub-menu">
                <li>
                    <nuxt-link to="/blog-left-sidebar">Blog Left Sidebar</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/blog-right-sidebar">Blog Right Sidebar</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/blog-details">Blog Details</nuxt-link>
                </li>
            </ul>
        </li>
        <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
    </ul>
</template>