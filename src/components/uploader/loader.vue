<template>
  <div class="uploader__title">
    <input @change="loadFile($event)" type="file" name="file" id="file" class="inputFile" :accept="projectFormat"/>
    <p>Drop files here or <label  class="text-primary text-decoration" for="file">Browse</label> to upload</p>
    <button @click="$emit('toggleComponent', 'save-projects')">ASd</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
interface TaskList {
  taskList: [];
}
interface Task {
  name: string;
  description: string;
  mark: boolean;
}
@Component
export default class Loader extends Vue {
  private projectFormat = 'application/json'
  public async loadFile (e: any) {
    try {
      const file = e.target.files[0]
      const fileData = await this.readFile(file)
      const data = JSON.parse(fileData)
      if (!this.checkValidTaskList(data)) {
        this.throwError('Invalid structure')
        return
      }
      if (this.isHasTasks(data.taskList) && !this.isValidTasks(data.taskList)) {
        this.throwError('Invalid structure')
        return
      }
      console.log('Valid json')
    } catch (e) {
      console.error(e)
      this.throwError('Failed to parse JSON file, please check correct structure')
    }
  }

  public checkValidTaskList (arg: TaskList): boolean {
    return arg && 'taskList' in arg && Array.isArray(arg.taskList)
  }

  public isHasTasks (list: []): boolean {
    return Object.keys(list).length > 0
  }

  public isValidTasks (taskList: []): boolean {
    for (const task of taskList) {
      if (!this.checkTask(task)) {
        return false
      }
    }
    return true
  }

  public checkTask (task: Task): boolean {
    if (task) {
      return ('name' in task && typeof task.name === 'string') &&
        ('description' in task && typeof task.description === 'string') &&
        ('mark' in task && typeof task.mark === 'boolean')
    }
    return false
  }

  public throwError (message: string): void {
    this.$store.commit('toggleError', { show: true, message })
  }

  public readFile (file: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsText(file)
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result)
        }
        resolve('')
      }
      reader.onerror = error => reject(error)
    })
  }
}
</script>

<style scoped>
  .inputFile {
    display: none;
  }
  .inputFile + label {
    font-size: 1.25em;
    font-weight: 600;
    display: inline-block;
  }
  .uploader__title {
    /*position: absolute;*/
    /*display: inline-block;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 50%;*/
    /*transform: translateY(-50%);*/
  }
  .uploader__title label {
    cursor: pointer;
  }
</style>
