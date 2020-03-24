<template>
  <div>
    <transition name="slide-fade" mode="out-in">
      <component
        :is="currentComponent"
        @toggleComponent="toggleComponent"
      ></component>
    </transition>
  </div>
</template>

<script lang="ts">
import Loader from '@/components/uploader/loader.vue'
import SaveProjects from '@/components/uploader/save-projects.vue'
import { Component, Emit, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Loader,
    SaveProjects
  }
})
export default class Uploader extends Vue {
  private currentComponent = 'loader'
  @Emit('toggleComponent')
  toggleComponent (component: string): void {
    this.currentComponent = component
  }
}
</script>

<style scoped>

</style>
