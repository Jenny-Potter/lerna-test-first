<template>
  <div>
    <div class="any">
      的main文件
    {{abc}}
    </div>
    <button @click="opencomponents">惦记我</button>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    abc () {
      return 345
    }
  },
  opencomponents () {
    this.$router.push('/pages/nevigator/index')
  }
}
</script>
<style scoped>
.any {
  width: 100%;
}

</style>