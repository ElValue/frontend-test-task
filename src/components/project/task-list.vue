<template>
  <draggable
    :list="taskList"
    :group="{ name: 'task-list' }"
    :empty-insert-threshold="dropAreaSize"
    class="dragArea"
  >
    <div v-for="(task, i) in taskList" :key="task.name" class="card cursor-pointer mb-5 text-left">
      <div class="card-header">
        {{task.name}}
      </div>
      <div class="card-body">
        <p class="card-text">{{task.description}}</p>
      </div>
      <div class="custom-control custom-checkbox mb-3 ml-4 mr-4">
        <input :checked="task.mark" @change="task.mark = !task.mark" :id="`task_mark${i}`" type="checkbox" class="custom-control-input" required>
        <label class="custom-control-label" :for="`task_mark${i}`">Check this custom checkbox</label>
      </div>
      <task-list :taskList="task.nested" class="ml-4 mr-4"></task-list>
    </div>
  </draggable>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IProject } from '@/store/models'
import Draggable from 'vuedraggable'

@Component({
  components: {
    Draggable
  }
})
export default class TaskList extends Vue {
  private readonly dropAreaSize = 80
  @Prop({ required: true, type: Array, default: [] })
  taskList!: IProject['taskList']
}
</script>

<style scoped>

</style>
