<template>

  <div>
    <header>
      <a href="#">
        <img class="logo-roy" src="../images/Title.png" alt="Roy´s homepage">
      </a>
    </header>
    <div class="blank-space"></div>
    <main>
      <h1 class="sr-only">Homepage</h1>
      <div v-if="isLoading && yachts.length === 0" class="loading-indicator">
        <p>Loading...</p>
      </div>
      <section v-else>
        <h2 class="sr-only">Yacht search results</h2>
        <div class="counter-results-and-layout-actions">
          <p class="counter-results-and-layout-actions--desktop">YACHTS FOR SALE · {{ totalYachts.total }}</p>
          <p class="counter-results-and-layout-actions--mobile">BUY · {{ totalYachts.total }} YACHTS</p>
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
          <article v-for="yacht in formattedYachts" :key="yacht.id" class="yacht-card">
            <img class="img" :src="yacht.coverImage.url" alt="yacht image">
            <a href="#" class="fav">
              <img src="../images/fav.icon.png" alt="fav icon">
            </a>
            <div class="details">
              <p class="price">Price: €{{ yacht.formattedPrice }}</p>
              <p>Length: {{ yacht.length.meters }}m | Guests: {{ yacht.guestsNumber }} | Cabins: {{ yacht.cabinsNumber
                }}</p>
            </div>
            <div class="header-and-enquire-action">
              <h3>{{ yacht.name }}</h3>
              <a class="enquiry" href="#" :aria-label="'Enquire ' + yacht.name">Enquiry</a>
            </div>
          </article>
        </div>
        <div class="load-more-wrapper">
          <button class="load-button" @click="loadMoreYachts" :disabled="isLoading">
            <span v-if="isLoading">Loading...</span>
            <span v-else>Load more</span>
          </button>
        </div>
      </section>
    </main>
  </div>

</template>

<script lang="ts">

import { defineComponent, ref, onMounted, computed } from 'vue'
import type { Yacht } from '~/types/yacht';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    // **State variables**
    const gridView = ref<'grid' | 'solo'>('grid');
    const yachts = ref<Yacht[]>([]);
    const totalYachts = ref<{ total: number }>({ total: 0 });
    const isLoading = ref(false);
    const currentPage = ref(1);

    // **Fetch yachts function (API call)**
    const loadYachts = async () => {
      if (isLoading.value) return;
      isLoading.value = true;
      try {
        const response = await fetch('/api/yachts?buy=true&page=1');

        if (!response.ok) throw new Error('Failed to fetch yachts');
        const result = await response.json();

        yachts.value = result.data;
        // console.log(yachts.value)

        totalYachts.value.total = result.meta.total;
        // console.log(totalYachts.value)
        currentPage.value++;

      } catch (error) {
        console.error('Error loading yachts:', error);
      } finally {
        isLoading.value = false;
      }
    };

    // **Load more yachts (append data)**
    const loadMoreYachts = async () => {
      if (isLoading.value) return;
      isLoading.value = true;

      try {
        console.log('Loading more yachts...');
        const response = await fetch('/api/yachts?buy=true&page=2');
        if (!response.ok) throw new Error('Failed to load more yachts');
        const moreYachts = await response.json();
        yachts.value = [
          ...yachts.value,
          ...moreYachts.data.map((yacht: Yacht) => ({
            ...yacht,
            formattedPrice: new Intl.NumberFormat('es-ES').format(yacht.buyPrice.EUR),
          })),
        ];
      } catch (error) {
        console.error('Error loading more yachts:', error);
      } finally {
        isLoading.value = false;
      }
    };

    const formattedYachts = computed(() =>
      yachts.value.map(yacht => ({
        ...yacht,
        formattedPrice: new Intl.NumberFormat('es-ES').format(yacht.buyPrice.EUR),
      }))
    );

    // **Grid view toggle**
    const setGridView = (view: 'grid' | 'solo') => {
      gridView.value = view;
      console.log("Grid view set to:", gridView.value);
    };

    // **Load yachts on mount**
    onMounted(() => {
      loadYachts();
    });

    return {
      gridView,
      yachts,
      setGridView,
      loadMoreYachts,
      totalYachts,
      formattedYachts,
      isLoading,
    };
  }
});

</script>

