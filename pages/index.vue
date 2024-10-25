index.vue
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
      <section>
        <h2 class="sr-only">Yacht search results</h2>
        <div class="counter-results-and-layout-actions">
          <p class="counter-results-and-layout-actions--desktop">YACHTS FOR SALE · 340</p>
          <p class="counter-results-and-layout-actions--mobile">BUY · 340 YACHTS</p>
          <div class="actions">
            <span>| View</span>
            <a class="icon-grid" href="#">
              <img src="../images/grid.png" alt="grid-items" @click.prevent="setGridView('grid')">
            </a>
            <a href="#">
              <img src="../images/grid-solo.png" alt="solo-items" @click.prevent="setGridView('solo')">
            </a>
          </div>
        </div>
        <div :class="['yacht-cards', gridView]">
          <article v-for="yacht in yachts" :key="yacht.id" class="yacht-card">
            <img class="img" :src="yacht.coverImage.url" alt="yacht image">
            <a href="#" class="fav">
              <img src="../images/fav.icon.png" alt="fav icon">
            </a>
            <div class="details">
              <p class="price">Price: €{{ yacht.buyPrice.EUR }}</p>
              <p>Length: {{ yacht.length.meters }}m | Guests: {{ yacht.guestsNumber }} | Cabins: {{ yacht.cabinsNumber }}</p>
            </div>
            <div class="header-and-enquire-action">
              <h3>{{ yacht.name }}</h3>
              <a class="enquiry" href="#" :aria-label="'Enquire ' + yacht.name">Enquiry</a>
            </div>
          </article>
        </div>
        <div class="load-more-wrapper">
          <button class="load-button" @click="loadMoreYachts">
            Load more
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    // **State variables**
    const gridView = ref<'grid' | 'solo'>('grid');
    const yachts = ref<any[]>([]);

    // **Fetch yachts function (direct API call)**
    const loadYachts = async () => {
      try {
        const response = await fetch('/api/yachts?buy=true&page=1'); 

        if (!response.ok) throw new Error('Failed to fetch yachts');
        const result = await response.json();
        yachts.value = result.data;
        console.log(yachts.value)
        
      } catch (error) {
        console.error('Error loading yachts:', error);
      }
    };

    // **Load more yachts (append data)**
    const loadMoreYachts = async () => {
      try {
        console.log('Loading more yachts...');
        const response = await fetch('/api/yachts?buy=true&page=2');
        if (!response.ok) throw new Error('Failed to load more yachts');
        const moreYachts = await response.json();
        yachts.value = [...yachts.value, ...moreYachts];
      } catch (error) {
        console.error('Error loading more yachts:', error);
      }
    };

    // **Grid view toggle**
    const setGridView = (view: 'grid' | 'solo') => {
      gridView.value = view;
      console.log("Grid view set to:", gridView.value);
    };

    // **Load yachts on mount**
    onMounted(() => {
      loadYachts();
      console.log('Mounted lifecycle hook called');
    });

    return {
      gridView,
      yachts,
      setGridView,
      loadMoreYachts
    };
  }
});

</script>

<style>
@font-face {
  font-family: 'FrankRuhlLibre';
  src: url('../static/fonts/FrankRuhlLibre-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'UrbanGroteskMeBl';
  src: url('../static/fonts/UrbanGroteskMeBl-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'UrbanGroteskReBo';
  src: url('../static/fonts/UrbanGroteskReBo-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  vertical-align: baseline;
}

*::before,
*::after {
  display: block;
}

:root {
  /* COLORS */
  --color-white: #FFFFFF;

  --color-oceanLux-800: #323349;
  --color-oceanLux-600: #676778;
  --color-oceanLux-400: #676778;

  --color-black-scale-500: #858585;
  --color-black-scale-700: #4E4E4E;

  --color-primary-800: #0B2020;
  --color-primary-900: #091919;
  --color-primary-700: #405757;
  /* FONTS */
  --font-family: UrbanGroteskReBo, Helvetica, Arial, sans-serif;
  --font-weight-regular: 400;

  --font-h3: var(--font-weight-regular) 20px/1.5 var(--font-family);
  --font-body-20: var(--font-weight-regular) 20px/1.5 var(--font-family);
  --font-body-16: var(--font-weight-regular) 16px/1.5 var(--font-family);
  --font-button-16: var(--font-weight-regular) 16px/1.5 var(--font-family);

  /* SPACINGS */
  --spacing-2: 0.125rem;
  --spacing-4: 0.25rem;
  --spacing-8: 0.5rem;
  --spacing-10: 0.625rem;
  --spacing-12: 0.75rem;
  --spacing-16: 1rem;
  --spacing-24: 1.5rem;
  --spacing-32: 2rem;
  --spacing-40: 2.5rem;
  --spacing-48: 3rem;
  --spacing-60: 3.75rem;
  --spacing-64: 4rem;

  /* LAYOUT */
  --header-height: 80px;

  /*Z-INDEX*/
  --z-index-1: 1;
  --z-index-2: 2;
  --z-index-3: 3;
  --z-index-4: 4;
  --z-index-5: 5;

  --z-index-header: var(--z-index-1);
}

body {
  /* default font styles */
  color: var(--color-black-700);
  font: var(--font-body-16);
}

h3 {
  font: var(--font-h3);
}

/* HEADER */
.blank-space {
  padding-bottom: var(--spacing-32);
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: var(--spacing-12);
  padding-bottom: var(--spacing-12);
  height: var(--header-height);
  /* navbar fixed */
  position: fixed;
  left: 0;
  right: 0;
  background-color: var(--color-white);
  z-index: var(--z-index-1);
}

main {
  margin-top: var(--header-height);
}

.logo-roy {
  width: 3.875rem;
  height: 1.75rem;
}

/* MAIN CONTENT */
.counter-results-and-layout-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: var(--spacing-12);
    padding-top: var(--spacing-16);
    padding-bottom: var(--spacing-32);
}

@media (min-width: 635px) {
  .counter-results-and-layout-actions{
    display: flex;
  justify-content: space-between;
  padding: var(--spacing-8) var(--spacing-16) var(--spacing-8) var(--spacing-16);
  font: var(--font-body-20);
  color: var(--color-oceanLux-800);
  }
}

.counter-results-and-layout-actions--desktop {
  display: none;
}

.counter-results-and-layout-actions--mobile {
  display: block;
  font: var(--font-body-16);
}

.actions {
  display: none;
}

@media (min-width: 635px) {
  .counter-results-and-layout-actions--desktop {
    display: block;
  }

  .counter-results-and-layout-actions--mobile {
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

.yacht-cards {
  padding-left: var(--spacing-16);
  padding-right: var(--spacing-16);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
  gap: var(--spacing-60);
  transition: all 0.3s ease-in-out;
}

/* CAMBIOS DE ESTADO PARA EL GRID */
.yacht-cards.grid {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-48) var(--spacing-2);

}

.yacht-cards.solo {
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: var(--spacing-60) var(--spacing-10);
}

/* BREACKPOINTS */
/* @media (min-width: 1024px) {
  .yacht-cards, .yacht-cards.grid, .yacht-cards.solo {
    gap: var(--spacing-60) var(--spacing-10);
  }
}

@media (min-width: 1440px) {
  .yacht-cards, .yacht-cards.grid, .yacht-cards.solo {
    gap: var(--spacing-48) var(--spacing-2);
  }
} */

.yacht-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
  color: var(--color-black-scale-700);
  position: relative;
}

.fav {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: var(--z-index-1);
  width: 26px;
  height: 26px;
}

.price {
  color: var(--color-black-scale-500);
}

.header-and-enquire-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: var(--spacing-16);
}

.enquiry {
  background-color: var(--color-primary-800);
  color: var(--color-white);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 44px;
  padding: var(--spacing-8) var(--spacing-16) var(--spacing-8) var(--spacing-16);
  opacity: 0;
}

@media (max-width: 840px) {
  .enquiry {
    background-color: var(--color-primary-700);
  }
}

.fav,
.enquiry {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.yacht-card:hover .fav,
.yacht-card:hover .enquiry {
  opacity: 1;
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
  /* 110px */
  height: 2.75rem;
  /* 44px */
  background-color: transparent;
  border: 1px solid var(--color-oceanLux-600);
  border-radius: 0.125rem;
  color: var(--color-oceanLux-600);
}

/*UTILS*/
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
  padding: var(--spacing-8) var(--spacing-16) var(--spacing-8) var(--spacing-16);
}
</style>
