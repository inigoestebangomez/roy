<template>
  <div>
    <header>
      <h1>ROY</h1>
    </header>
    <main>
      <section>
        <div class="head">
          <span>YATCH FOR SALE · </span><span>340</span>
          <span>|</span>
          <span>View</span>
        </div>
        <article>
          <div class="card">
            <img
            class="img"
            src="https://www.arthaudyachting.com/wp-content/uploads/2023/02/Yacht-charter-M-Y-DOMINIQUE_8.jpg" 
            alt="yatch"
            >
            <span class="price">Price: <span>€2.000.000</span></span>
            <span class="info">Length: <span>55.2m</span></span>
            <span> | </span>
            <span>Guests: <span>12</span></span>
            <span> | </span>
            <span>Cabins: <span>7</span></span>
            <h3>Yatch Name</h3>
          </div>
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
.img {
  width: 300px; 
}
</style>