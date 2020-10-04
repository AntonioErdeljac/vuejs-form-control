<template>
  <form-helper>
    <div slot="form-header">
      <h3>Form One - Contact</h3>
      <p>Fill in the contact form</p>
    </div>
    <div slot="form-fields">
        <input type="text" name="name" id="name" placeholder="name" requried />
        <label for="message">Your message:</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
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
