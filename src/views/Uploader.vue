<template>
  <div>
    <loader @fetchFile="fetchFile"></loader>
  </div>
</template>

<script lang="ts">
import Loader from '@/components/uploader/loader.vue'
import { Component, Emit, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Loader
  }
})
export default class Uploader extends Vue {
  @Emit('fetchFile')
  fetchFile ({ fileName, taskList }: { fileName: string; taskList: [] }): void {
    this.$store.commit('project/saveToStorage', {
      name: fileName,
      taskList
    })
    this.$router.push({ name: 'Project', query: { name: fileName } })
  }
}
</script>

<style scoped>

</style>
