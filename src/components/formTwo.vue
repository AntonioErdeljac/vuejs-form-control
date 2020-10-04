<template>
  <form-helper>
    <div slot="form-header">
      <h3>Form One - Login</h3>
      <p>Fill in the login form</p>
    </div>
    <div slot="form-fields">
      <input type="text" name="username" id="username" required />
      <input type="password" name="password" id="password" required />
    </div>
    <div slot="form-controls">
      <button @click="handleSubmit">Send</button>
    </div>
  </form-helper>
</template>

<script>
export default {

}
</script>

<style>

</style>
