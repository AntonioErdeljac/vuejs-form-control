<template>
  <div>
    <h1>Please fill out the form</h1>
    <form>
      <div id="form-header">
        <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div id="form-controls">
        <slot name="form-controls"></slot>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
