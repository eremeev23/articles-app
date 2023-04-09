<script lang="ts" setup>
import { IComment } from "~/types/";
import { useDateString } from "~/composables/use-date-string";

interface IProps {
  comment: IComment
}
const props = defineProps<IProps>();

const createdAt = computed(
  () => props.comment ? useDateString(props.comment.createdAt) : ''
)
</script>

<template>
  <div class="p-2 row h-100 g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
    <div class="mb-3 d-flex align-items-center gap-2">
      <div class="avatar-wrapper w-fit rounded-circle overflow-hidden">
        <img class="w-100 h-100" :src="comment.avatar" alt="">
      </div>
      <div>
        <h4 class="mb-0">
          {{ comment.name }}
        </h4>
        <span class="fs-6 text-muted">
          {{ createdAt }}
        </span>
      </div>
    </div>
    <p>
      {{ comment.comment }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.avatar-wrapper {
  flex: none;
  width: 60px;
  aspect-ratio: 1;

  img {
    object-fit: cover;
  }
}
</style>
