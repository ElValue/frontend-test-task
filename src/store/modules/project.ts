import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { getItemFromSessionStorage, setItemToSessionStorage } from '@/utils/session.service'
import { IProject } from '@/store/models.d.ts'

@Module({ namespaced: true, name: 'Project' })

class Project extends VuexModule implements IProject {
  public name = ''
  public taskList: IProject['taskList'] = []

  @Mutation
  private save ({ name, taskList }: IProject): void {
    this.name = name
    this.taskList = taskList
  }

  @Mutation
  public saveToStorage ({ name, taskList }: IProject): void {
    setItemToSessionStorage(name, taskList)
  }

  @Action
  public search ({ name }: { name: string }): any {
    const project = getItemFromSessionStorage(name)
    if (project !== null) {
      this.context.commit('save', { name, taskList: project.data })
    }
  }
}
export default Project
