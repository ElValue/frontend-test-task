<template>
  <div class="input-group input-group-lg col-12 p-0">
    <input v-model="textValue" type="text" class="form-control">
    <div class="input-group-append">
      <button type="button" class="btn btn-success input-group-text" @click="$emit('customAction')">Save</button>
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
