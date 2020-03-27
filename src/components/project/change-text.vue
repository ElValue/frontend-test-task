<template>
  <div>
    <div class="input-group input-group-lg col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 m-auto">
      <input v-model="textValue" type="text" class="form-control">
      <div class="input-group-append">
        <button type="button" class="btn btn-success input-group-text" @click="$emit('customAction')">Save</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ChangeText extends Vue {
  @Prop()
  private text!: string

  get textValue () {
    return this.text
  }

  set textValue (value) {
    this.$emit('updateText', value)
  }
}
</script>

<style scoped>

</style>
