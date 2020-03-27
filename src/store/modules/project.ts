import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { getItemFromSessionStorage, setItemToSessionStorage } from '@/utils/session.service'
import { IProject } from '@/store/models.d.ts'

@Module({ namespaced: true, name: 'Project' })

class Project extends VuexModule implements IProject {
  public name = ''
  public taskList: IProject['taskList'] = []

  @Mutation
  private updateTaskList (taskList: IProject['taskList']): void {
    this.taskList = taskList
  }

  @Mutation
  public updateName (name: IProject['name']): void {
    this.name = name
  }

  @Mutation
  public saveToStorage ({ name, taskList }: IProject): void {
    setItemToSessionStorage(name, taskList)
  }

  @Action
  public search ({ name }: { name: string }): any {
    const project = getItemFromSessionStorage(name)
    if (project !== null) {
      this.context.commit('updateName', name)
      this.context.commit('updateTaskList', project.data)
    }
  }
}
export default Project
