<template>
  <div>
    <h1>Project</h1>
    {{name}}
    {{taskList}}
    <change-text :text="name" @updateText="fetchFile" ></change-text>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator'
import store from '@/store'
import { namespace } from 'vuex-class'
import ChangeText from '@/components/project/change-text.vue'
const project = namespace('project')

Component.registerHooks([
  'beforeRouteEnter'
])

@Component({
  components: {
    ChangeText
  }
})
export default class Project extends Vue {
  @project.State
  public name!: string

  @project.State
  private taskList!: []

  @Emit('updateText')
  fetchFile (text: string): void {
    this.$store.commit('project/updateName', text)
  }

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
