<template>
  <div>
    <header class="header">
      <img 
      class="logo-roy"
      src="../images/Title.png" 
      alt="roy">
    </header>
    <div class="blank-space"></div>
    <main>
      <section>
        <div class="content">
          <div class="content-info">
            <span>YACHTS FOR SALE · </span><span>340</span>
          </div>
          <div class="content-view-mode">
            <span>|</span>
            <span>View</span>
            <a class="icon-grid" href="#">
              <img src="../images/grid.png" alt="grid-items">
            </a>
            <a href="#">
              <img src="../images/grid-solo.png" alt="solo-items">
            </a>
          </div>
        </div>
        <article class="card-group">
          <div class="card">
            <img class="img"
              src="https://www.arthaudyachting.com/wp-content/uploads/2023/02/Yacht-charter-M-Y-DOMINIQUE_8.jpg"
              alt="yatch">
            <div class="card-info">
              <p class="price">Price: <span>€2.000.000</span></p>
              <span>Length: <span>55.2m</span></span>
              <span> | </span>
              <span>Guests: <span>12</span></span>
              <span> | </span>
              <span>Cabins: <span>7</span></span>
            </div>
            <div class="more-details">
              <h3>Yatch Name</h3>
              <button class="btn --dark">Enquiry</button>
            </div>
          </div>
          <button class="btn-light">
            Load more
          </button>
        </article>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
<style>
@font-face {
  font-family: 'FrankRuhlLibre';
  src: url('/fonts/FrankRuhlLibre-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'UrbanGroteskMeBl';
  src: url('/fonts/UrbanGroteskMeBl-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'UrbanGroteskReBo';
  src: url('/fonts/UrbanGroteskReBo-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  vertical-align: baseline;
}
*::before, *::after {
  display: block;
}
:root {
  /* COLOURS */
  --color-white: #FFFFFF;
  --color-grey-oceanLux-800: #323349;
  --color-grey-oceanLux-600: #676778;
  --color-grey-price: #858585;
  --color-grey-info: #4e4e4e;
  --color-black-title: #102D2D;
  --color-black-900-name: #091919;
  --color-black-800-button: #0B2020;
  --color-grey-blue-500-button: #405757;
  --color-transparent: #00000000;
  /* FONTS */
  --font-family-texts:  UrbanGroteskReBo, Helvetica, Arial, sans-serif;
  --font-weight-regular: 400;
  --font-size-16: 1rem;
  --font-size-20: 1.25rem;

  /* SPACINGS */
  --spacing-4: 0.25rem;
  --spacing-8: 0.5rem;
  --spacing-10: 0.625rem;
  --spacing-12: 0.75rem;
  --spacing-16: 1rem;
  --spacing-24: 1.5rem;
  --spacing-32: 2rem;
  --spacing-40: 2.5rem;
  --spacing-64: 4rem;
  --zindex-header: 100;
  /* BORDERS */
  --border-radius-4: 0.25rem;
  --border-width-1: 0.0625rem;
  --input-and-btn-height: 2.75rem;
}
/* HEADER */
.blank-space{
  padding-bottom: var(--spacing-32);
}
.header{
display: flex;
justify-content: center;
align-items: center;
padding-top: var(--spacing-12);
padding-bottom: var(--spacing-12);
}
.logo-roy{
  width: 3.875rem; /*62px*/
  height: 1.75rem; /*28px*/
}
/* MAIN CONTENT */
.content{
  font-family: var(--font-family-texts);
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-8) var(--spacing-16) var(--spacing-8) var(--spacing-16);
}
.grid-items, .solo-items{
  width: 1.5rem;
  height: 1.5rem;
}
.content-info{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-8);
  font-size: var(--font-size-20);
  color: var(--color-grey-oceanLux-800);
}
.content-view-mode{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-8);
  color: var(--color-grey-oceanLux-600);
  font-size: var(--font-size-16);
}
.card-group{
  padding-left: var(--spacing-16);
  padding-right: var(--spacing-16);
}
.card {
  width: 21.875rem; /*350px*/
  height: 21.25rem; /*340px*/
}
.img {
  width: 21.875rem; /*350px*/
  height: 13.75rem; /*220px*/
}
.card-info{
  font-family: var(--font-family-texts);
  color: var(--color-grey-info);
  gap: 2px;

}
.price{
font-family: var(--font-family-texts);
font-size: var(--font-size-16);
color: var(--color-grey-price);
}

</style>