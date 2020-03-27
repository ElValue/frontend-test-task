<template>
<!--  <p>{{taskList}}</p>-->
  <draggable :list="taskList" :group="{ name: 'task-list' }" class="dragArea row justify-content-center">
    <div v-for="(task, i) in taskList" :key="task.name" class="card cursor-pointer mb-3 col col-7 col-lg-7 col-sm-12 text-left">
      <div class="card-header">
        {{task.name}}
      </div>
      <div class="card-body">
        <p class="card-text">{{task.description}}</p>
      </div>
      <div class="custom-control custom-checkbox mb-3">
        <input :checked="task.mark" @change="task.mark = !task.mark" :id="`task_mark${i}`" type="checkbox" class="custom-control-input" required>
        <label class="custom-control-label" :for="`task_mark${i}`">Check this custom checkbox</label>
      </div>
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
  @Prop({ required: true, type: Array, default: [] })
  taskList!: IProject['taskList']
}
</script>

<style scoped>

</style>
