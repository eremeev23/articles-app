<script lang="ts" setup>
import { IArticle } from "~/types";
import { useDateString } from "~/composables/use-date-string";

interface IProps {
  article: IArticle;
}
const props = defineProps<IProps>();

const createdAt = computed(
  () => props.article ? useDateString(props.article.createdAt) : ''
)
</script>

<template>
  <div class="post-card row h-100 g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
    <div class="col p-4 d-flex flex-column position-static">
      <h3 class="mb-0">
        {{ article.title }}
      </h3>
      <span class="mb-1 fs-6 text-muted">
        {{ createdAt }}
      </span>
      <p class="card-text mb-auto">
        {{ article.content }}
      </p>
      <nuxt-link :to="`/posts/${article.id}`">
        Continue reading
      </nuxt-link>
    </div>
    <div class="col-auto rounded post-card__img-wrapper">
      <img class="rounded" :src="article.image" :alt="article.title">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-card {
  //! SETTING MAX LINES OF <p>
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -moz-box-orient: vertical;
    -webkit-box-orient: vertical;
    box-orient: vertical;
  }

  &__img-wrapper {
    padding: 0.5rem 1rem;
    display: flex;
    width: 40%;

    img {
      width: 100%;
      object-fit: cover;

      @media screen and (max-width: 540px) {
        max-height: 200px;
      }
    }
  }
}
</style>
