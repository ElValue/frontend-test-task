<template>
  <div>
    <h1>Task-list</h1>
  </div>
</template>

<script lang="ts">
import List from '@/components/task-list/list.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    List
  }
})
export default class TaskList extends Vue {}
</script>

<style scoped>

</style>
