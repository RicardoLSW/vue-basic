<template>
  <div class="test-container page-container">
    <div class="page-title">Unit Test Page</div>
    <p>count is: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Test",
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value += 1;
    };
    return { count, increment };
  },
};
</script>
