<script lang="ts" setup>
import { IArticle } from "~/types";

interface IProps {
  mainArticle: IArticle | null;
}

defineProps<IProps>();
</script>

<template>
  <div
    v-if="mainArticle"
    class="main-article position-relative d-flex gap-5 p-4 p-md-5 mb-4 rounded bg-black"
  >
    <div class="col-md-6 px-0 text-white">
      <h1 class="display-4 fst-italic">
        {{ mainArticle.title }}
      </h1>
      <p class="lead my-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eos ex in nisi omnis placeat ut?
        Aliquam asperiores beatae delectus earum error facere nesciunt nihil nobis repellendus ut?
        Doloremque, quia!
      </p>
      <p class="lead mb-0">
        <nuxt-link :to="`/posts/${mainArticle.id}`" class="fw-bold text-success">
          Go to post
        </nuxt-link>
      </p>
    </div>
    <div>
      <img
        class="w-100"
        :src="mainArticle.image"
        alt=""
      >
    </div>
  </div>
</template>

<style scoped>
.main-article::before {
  position: absolute;
  content: "Featured post";
  left: 3rem;
  top: 1rem;
  color: var(--bs-danger);
  font-style: italic;
  font-weight: 500;
  text-transform: uppercase;
}
</style>
