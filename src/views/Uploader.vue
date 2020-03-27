<template>
  <input-loader @fetchFile="fetchFile"></input-loader>
</template>

<script lang="ts">
import InputLoader from '@/components/loader/input.vue'
import { Component, Emit, Vue } from 'vue-property-decorator'
import { ITask } from '@/store/models'

@Component({
  components: {
    InputLoader
  }
})
export default class Uploader extends Vue {
  @Emit('fetchFile')
  fetchFile ({ fileName, taskList }: { fileName: string; taskList: ITask[] }): void {
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
