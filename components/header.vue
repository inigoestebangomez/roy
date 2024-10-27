<template>
    <header>
        <a href="/">
            <img class="logo-roy" src="../images/Title.png" alt="Roy´s homepage">
        </a>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: var(--spacing-12);
    padding-bottom: var(--spacing-12);
    height: var(--header-height);
    /* WHEN SCROLLING */
    position: fixed;
    left: 0;
    right: 0;
    background-color: var(--color-white);
    z-index: var(--z-index-1);
}

.logo-roy {
    width: 3.875rem;
    height: 1.75rem;
}
</style>