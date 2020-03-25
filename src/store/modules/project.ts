// store/modules/user.ts
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'Project' })

class Project extends VuexModule {
  public name = 'Test'

  @Mutation
  public setName (newName: string): void {
    this.name = newName
  }

  @Action
  public updateName (newName: string): void {
    // this.context.commit('setName', newName)
  }
}
export default Project
