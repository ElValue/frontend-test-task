<template>
  <div class="uploader__title">
    <input @change="click($event)" type="file" name="file" id="file" class="inputFile" :accept="projectFormat"/>
    <p>Drop files here or <label  class="text-primary text-decoration" for="file">Browse</label> to upload</p>
    <button @click="$emit('toggleComponent', 'save-projects')">ASd</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Loader extends Vue {
  private projectFormat = 'application/json'
  public click (ev: any): void {
    const file = ev.target.files
    console.log(file)
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
    display: inline-block;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .uploader__title label {
    cursor: pointer;
  }
</style>
