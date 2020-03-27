import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { getItemFromSessionStorage, setItemToSessionStorage } from '@/utils/session.service'

@Module({ namespaced: true, name: 'Project' })

class Project extends VuexModule {
  public name = ''
  public taskList = []

  @Mutation
  public save ({ name, taskList }: { name: string; taskList: [] }): void {
    this.name = name
    this.taskList = taskList
  }

  @Mutation saveToStorage ({ name, taskList }: { name: string; taskList: [] }): void {
    setItemToSessionStorage(name, taskList)
  }

  @Action
  public search ({ name, taskList }: { name: string; taskList: [] }): any {
    const project = getItemFromSessionStorage(name)
    if (project !== null) {
      this.context.commit('save', { name, taskList: project.data })
    }
  }
}
export default Project
