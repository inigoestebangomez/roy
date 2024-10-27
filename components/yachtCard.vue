<template>
    <article :class="['yacht-card', gridView]">
      <img class="img" :src="yacht.coverImage.url" alt="yacht image" />
      <a href="#" class="fav">
        <img src="../images/fav.icon.png" alt="fav icon" />
      </a>
      <div class="details">
        <p class="price">Price: €{{ formatPrice(yacht.buyPrice.EUR) }}</p>
        <p>
          Length: {{ yacht.length.meters }}m | Guests: {{ yacht.guestsNumber }} |
          Cabins: {{ yacht.cabinsNumber }}
        </p>
      </div>
      <div class="header-and-enquire-action">
        <h3>{{ yacht.name }}</h3>
        <a class="enquiry" href="#" :aria-label="'Enquire' + yacht.name">Enquiry</a>
      </div>
    </article>
  </template>
  
  <script lang="ts">
  import { defineComponent, type PropType } from 'vue';
  import type { Yacht } from '~/types/yacht';
  
  export default defineComponent({
    name: 'YachtCard',
    props: {
      yacht: {
        type: Object as PropType<Yacht>,
        required: true
      },
      gridView: {
        type: String as PropType<'grid' | 'solo'>,
        default: 'grid'
      }
    },
    setup() {
      const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-ES').format(price);
      };
  
      return {
        formatPrice,
      };
    }
  });
  </script>
  
  <style scoped>
  .yacht-card {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-12);
    color: var(--color-black-scale-700);
    position: relative;
  }
  
  .fav {
    position: absolute;
    top: 0.625rem;
    right: 0.625rem;
    z-index: var(--z-index-1);
    width: 1.625rem;
    height: 1.625rem;
  }
  
  .img {
    height: 100%;
    object-fit: cover;
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
    background-color: var(--color-primary-700);
    color: var(--color-white);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.5rem;
    height: 2.75rem;
    padding: var(--spacing-8) var(--spacing-16);
    opacity: 0;
  }
  
  @media (min-width: 37.5rem) {
    .enquiry {
      background-color: var(--color-primary-800);
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
  </style>
  