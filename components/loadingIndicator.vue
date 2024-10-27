<template>
    <div v-if="isLoading" class="loading">
        <p>Loading...</p>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
    isLoading: boolean;
    isButton?: boolean;
}>();
</script>

<style scoped>
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-8) var(--spacing-16) var(--spacing-8) var(--spacing-16);
    font: var(--font-body-16);
    color: var(--color-oceanLux-800);
}

@media (min-width: 37.5rem) {
    .loading {
        font: var(--font-body-20);
    }
}
</style>