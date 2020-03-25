<template>
  <div>
    <h1>{{name}}</h1>
  </div>
</template>

<script lang="ts">
import List from '@/components/project/list.vue'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const project = namespace('Project')

@Component({
  components: {
    List
  }
})
export default class Project extends Vue {
  @project.State
  public name!: string
}
</script>

<style scoped>

</style>
