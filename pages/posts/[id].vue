<script lang="ts" setup>
import { watch } from "vue";
import { useFetch, useHead, useRoute } from "#app";
import { IArticle, IComment } from "~/types";
import { useDateString } from "~/composables/use-date-string";

const { id } = useRoute().params;
const {
  pending,
  data: article
} = useFetch<IArticle>(`https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts/${id}`);

const {
  pending: commentsPending,
  data: comments
} = useFetch<IComment>("https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/comments");

const createdAt = computed(
  () => article.value ? useDateString(article.value.createdAt) : ''
)

watch(
  () => pending.value,
  () => {
    // Setting page title on SPA mode
    useHead({
      title: `Posts | ${article.value?.title}`
    })
  }
)
// Setting page title on SSR mode
useHead({
  title: `Posts | ${article.value?.title}`
})
</script>

<template>
  <main v-if="!pending && article" class="py-5 article-page">
    <div>
      <h1 class="text-uppercase fst-italic">
        {{ article.title }}
        <span class="d-block mt-2 fs-5 text-muted fst-normal">
          {{ createdAt }}
        </span>
      </h1>
      <div class="my-4 article-page__image rounded">
        <img class="rounded" :src="article.image" :alt="article.title">
      </div>
      <p class="fs-5">
        {{ article.content }}
      </p>
    </div>
    <div v-if="!commentsPending && comments">
      <h3 class="mt-4 mb-3">
        Comments:
      </h3>
      <div class="d-flex flex-column gap-2">
        <CommentsCard
          v-for="oneComment in comments"
          :id="oneComment.id"
          :comment="oneComment"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.article-page {
  &__image {
    width: 100%;
    height: 320px;

    img {
      width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
}
</style>
