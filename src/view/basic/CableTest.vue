<template>
  <div>
    <span>Cable Test</span>
    <test>
      <template v-slot:todo="{istodo}">
        {{istodo}}
      </template>
    </test>
  </div>
</template>

<script>
import test from './cable/test.vue';
export default {
  components: { test },
};
</script>