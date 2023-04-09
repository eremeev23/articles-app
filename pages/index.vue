<script lang="ts" setup>
import { useHead } from "#app";

useHead({
  title: "Main page"
})
</script>

<template>
  <main class="py-5">
    <div class="p-4 p-md-5 mb-4 rounded bg-black">
      <div class="col-md-6 px-0 text-white">
        <h1 class="display-4 fst-italic">
          Nuxt assignment by Maksim Eremeev
        </h1>
        <p class="lead my-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eos ex in nisi omnis placeat ut?
          Aliquam asperiores beatae delectus earum error facere nesciunt nihil nobis repellendus ut?
          Doloremque, quia!
        </p>
        <p class="lead mb-0">
          <nuxt-link to="/posts" class="fw-bold text-success">
            Go to posts page
          </nuxt-link>
        </p>
      </div>
    </div>
  </main>
</template>

<style>

</style>
