<template>
  <draggable
    :list="taskList"
    :group="{ name: 'task-list' }"
    :empty-insert-threshold="dropAreaSize"
    class="dragArea"
  >
    <div v-for="(task, i) in taskList"
         :key="i"
         class="card cursor-pointer mb-5 text-left"
    >
      <div class="card-header d-flex justify-content-between">
        <div>
<!--          <h4-->
<!--            v-if="!task.isChangeName"-->
<!--            @click="task.isChangeName = !task.isChangeName"-->
<!--          >-->
<!--            {{task.name}}-->
<!--          </h4>-->
<!--          <change-text-->
<!--            v-else-->
<!--            :text="task.name"-->
<!--            @updateText="updateName"-->
<!--            @customAction="toggleVisible"-->
<!--          ></change-text>-->
        </div>
        <button @click="$emit('destroyTask', { index: i, taskList })" type="button" class="btn btn btn-secondary btn-sm font-weight-bold">&times;</button>
      </div>
      <div class="card-body">
        <p class="card-text">{{task.description}}</p>
      </div>
      <div class="custom-control custom-checkbox mb-3 ml-4 mr-4">
        <input
          :checked="task.mark"
          @change="task.mark = !task.mark"
          :id="`task_mark${i}`"
          type="checkbox"
          class="custom-control-input"
          required
        >
        <label class="custom-control-label" :for="`task_mark${i}`">{{ markFlagText | markFlagFilter(task.mark) }}</label>
      </div>
      <task-list
        @destroyTask="$listeners.destroyTask"
        :taskList="task.nested"
        class="ml-4 mr-4"
      ></task-list>
    </div>
  </draggable>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import ChangeText from '@/components/project/change-text.vue'
import { ITask } from '@/store/models'
import Draggable from 'vuedraggable'

@Component({
  components: {
    Draggable,
    ChangeText
  },
  filters: {
    markFlagFilter: function (markFlagText: string, mark: boolean): string {
      if (mark) return markFlagText
      return 'Note done'
    }
  }
})
export default class TaskList extends Vue {
  private readonly dropAreaSize = 80
  private markFlagText = 'Done'
  @Prop({ required: true, type: Array, default: [] })
  taskList!: ITask[]

  @Emit('customAction')
  toggleVisible (index: number): void {
    // this.taskAction[index].isChangeName = false
    console.log(index)
  }

  @Emit('updateText')
  updateName (text: string): void {
    console.log(text)
  }

  created () {
    // this.taskList.forEach(task => {
    //   task.isChangeName = false
    // })
  }
}
</script>

<style scoped>

</style>
