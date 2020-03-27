<template>
  <div class="text-center align-items-center">
    <div class="mb-4">
      <h1
        v-if="!isChangeName"
        @click="isChangeName = !isChangeName"
        class="cursor-pointer m-0"
      >{{name}}</h1>
      <change-text
        v-else
        :text="name"
        @updateText="fetchFile"
        @customAction="toggleVisible"
      ></change-text>
    </div>
    <task-list :taskList="taskList"></task-list>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator'
import store from '@/store'
import { namespace } from 'vuex-class'
import ChangeText from '@/components/project/change-text.vue'
import TaskList from '@/components/project/task-list.vue'
const project = namespace('project')

Component.registerHooks([
  'beforeRouteEnter'
])

@Component({
  components: {
    ChangeText,
    TaskList
  }
})
export default class Project extends Vue {
  @project.State
  public name!: string

  @project.State
  private taskList!: []

  private isChangeName = false

  @Emit('updateText')
  fetchFile (text: string): void {
    this.$store.commit('project/updateName', text)
  }

  @Emit('customAction')
  toggleVisible (): void {
    this.isChangeName = false
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
