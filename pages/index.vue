<template>
  <h1 class="sr-only">Homepage</h1>

  <LoadingIndicator v-if="isLoading" :isLoading="isLoading" />

  <section v-else>
    <h2 class="sr-only">Yacht search results</h2>
    <div class="counter-results-and-layout-actions">
      <p class="counter-results--desktop">YACHTS FOR SALE · {{ totalYachts }}</p>
      <p class="counter-results--mobile">BUY · {{ totalYachts }} YACHTS</p>
      <div class="actions">
        <span>| View</span>
        <button class="icon-grid" href="#">
          <img src="../images/grid.png" alt="grid-items" @click.prevent="setGridView('grid')">
        </button>
        <button class="icon-grid" href="#">
          <img src="../images/grid-solo.png" alt="solo-items" @click.prevent="setGridView('solo')">
        </button>
      </div>
    </div>
    <div :class="['yacht-cards', gridView]">

      <YachtCard v-for="yacht in yachts" :key="yacht.id" :yacht="yacht" :view="gridView" />

    </div>
    <div class="load-more-wrapper">
      <button class="load-button" @click="loadYachts" :disabled="isLoading">
        <span v-if="isLoading">Loading...</span>
        <span v-else>Load more</span>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import type { Yacht } from '~/types/yacht';
import YachtCard from '~/components/yachtCard.vue';
import { fetchYachts } from '~/services/yachtService';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    let gridView = ref<'grid' | 'solo'>('grid');
    let yachts = ref<Yacht[]>([]);
    let totalYachts = ref<number>(0);
    let isLoading = ref(true);
    let currentPage = 1;

    const loadYachts = async () => {

      try {
        const response = await fetchYachts(currentPage);

        yachts.value = [...yachts.value, ...response.data];
        totalYachts.value = response.meta.total;
        currentPage++;

      } catch (error) {
        console.error('Error loading yachts:', error);
      } finally {
        isLoading.value = false;
      }
    };

    const setGridView = (view: 'grid' | 'solo') => {
      gridView.value = view;
    };

    onMounted(() => {
      loadYachts();
    });

    return {
      gridView,
      yachts,
      setGridView,
      totalYachts,
      isLoading,
      loadYachts,
    };
  }
});

</script>

<style scoped>
.counter-results-and-layout-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: var(--spacing-12);
  padding-top: var(--spacing-16);
  padding-bottom: var(--spacing-32);
}

@media (min-width: 37.5rem) {
  .counter-results-and-layout-actions {
    justify-content: space-between;
    padding: var(--spacing-8) var(--spacing-16) var(--spacing-8) var(--spacing-16);
  }
}

.counter-results--desktop {
  display: none;
}

.counter-results--mobile {
  display: block;
  font: var(--font-body-16);
}

.actions {
  display: none;
}

@media (min-width: 37.5rem) {
  .counter-results--desktop {
    display: block;
    font: var(--font-body-20);
    color: var(--color-oceanLux-800);
  }

  .counter-results--mobile {
    display: none;
  }

  .actions {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-8);
    color: var(--color-oceanLux-400);
    font: var(--font-body-16);
  }
}

.icon-grid {
  background-color: transparent;
  width: 1.5rem;
  height: 1.5rem;
}

.yacht-cards {
  padding-left: var(--spacing-16);
  padding-right: var(--spacing-16);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  gap: var(--spacing-60);
  transition: all 0.3s ease-in-out;
}

/* GRID */
.yacht-cards.grid {
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  gap: var(--spacing-48) var(--spacing-2);
}

.yacht-cards.solo {
  grid-template-columns: repeat(2, minmax(18.75rem, 1fr));
  gap: var(--spacing-60) var(--spacing-10);
}

/* LOAD MORE */
.load-more-wrapper {
  display: flex;
  justify-content: center;
  padding-top: var(--spacing-64);
  padding-bottom: var(--spacing-64);
}

.load-button {
  width: 6.875rem;
  height: 2.75rem;
  background-color: transparent;
  border: 0.063rem solid var(--color-oceanLux-600);
  border-radius: 0.125rem;
  color: var(--color-oceanLux-600);
  cursor: pointer;
}
</style>