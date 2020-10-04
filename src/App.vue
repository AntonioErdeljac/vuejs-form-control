<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>This is the form title</h3>
        <p>Information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" name="name" id="name" placeholder="name" requried />
        <input type="password" name="password" id="password" />
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper';

export default {
  components: {
    'form-helper': formHelper,
  },
  data () {
    return {
      title: 'I am a dynamic slot title'
    }
  }
}
</script>
