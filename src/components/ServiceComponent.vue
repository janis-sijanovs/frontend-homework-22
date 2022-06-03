<template>
  <button :class="{ active: service.isChosen }" @click="$emit('toggle-select')">
    {{ service.name }}
    {{ service.price }} $
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServiceComponent",
  props: {
    service: {},
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active {
  background-color: #42b983;
}
</style>
