<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <div class="container br border">
        <router-view/>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  box-sizing: border-box;
}
.container {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
}
.br {
  border-radius: 4px;
}
.border {
  border: 1px solid #cdcaca;
}
/*toggle animation components*/
.slide-fade-enter-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}
</style>
