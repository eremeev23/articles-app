<script lang="ts" setup>
import { computed } from "vue";
import { useHead, useFetch } from "#app";
import { IArticle } from "~/types";

const {
  pending,
  data: articles
} = useFetch<IArticle[]>("https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts");

const mainArticle = computed(
  (): IArticle | null => articles.value ? articles.value[0] : null
)

const commentsList = computed(
  (): IArticle[] | undefined => articles.value?.filter((article: IArticle, i) => i !== 0)
)

useHead({
  title: "Posts"
})
</script>

<template>
  <main class="py-5">
    <div v-if="!pending && !!articles">
      <PostsHeroSection
        :main-article="mainArticle"
      />
      <ul v-if="commentsList" class="d-grid grid-cols-2">
        <li
          v-for="article in commentsList"
          :key="article.id"
        >
          <PostsCard :article="article" />
        </li>
      </ul>
    </div>
  </main>
</template>

<style>

</style>
