<template>
    <header :class="{'scrolled-nav': scrollPosition}"></header>
    <nav>
        <div class="branding">
            <img src="" alt="logo text of Optikos">
        </div>
        <ul v-show="!mobile" class="navigation">
            <li>
                <router-link class="link" :to="{name: 'home'}">Home</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped></style>

