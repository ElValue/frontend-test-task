<template>
  <div>
    <input v-model="textValue" type="text">
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
