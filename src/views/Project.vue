<template>
  <div>
    <h1>Project</h1>
    {{name}}
    {{taskList}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import store from '@/store'
import { namespace } from 'vuex-class'
const project = namespace('project')

Component.registerHooks([
  'beforeRouteEnter'
])

@Component
export default class Project extends Vue {
  @project.State
  public name!: string

  @project.State
  private taskList!: []

  async beforeRouteEnter (to: any, from: any, next: any) {
    const projectName = to.query.name
    if (typeof projectName === 'undefined') {
      next('/')
    }
    await store.dispatch('project/search', { name: projectName })
    if (store.state.project.name !== projectName) {
      next('/')
    }
    next()
  }
}
</script>

<style scoped>

</style>
