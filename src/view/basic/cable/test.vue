<template>
    <div>
      <ul>
        <li
          v-for="todos in filteredTodos"
          v-bind:key="todos.id"
        >
          <slot name="todo" v-bind:istodo="todos">
            {{istodo.text}}
          </slot>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  data(){
    return {
      user: {
        first: "eat",
        last: "sleep"
      },
      filteredTodos: {
        aaa: "111",
        bbb: "222",
        ccc: "333",
        ddd: "444",
        eee: "555"
      }
    }
  }
}
</script>

<style>

</style>