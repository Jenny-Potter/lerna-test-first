<template>
  <div>
    <div>you see?</div>
    <button @click="open">click me</button>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },

  methods: {
    open () {
      this.$router.push('/pages/nevigator/main')
    }
  }

}
</script>

<style scoped>

</style>
