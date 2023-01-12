<template>
    <header :class="{'scrolled-nav': scrollPosition}"></header>
    <nav>
        <div class="branding">
            <img src="../assets/optikos-logo.png" alt="logo text of Optikos">
        </div>
        <ul v-show="!mobile" class="navigation">
            <li>
                <RouterLink
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped></style>

