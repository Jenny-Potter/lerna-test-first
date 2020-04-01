<template>
  <div>
    <div class="way">
      meishenmeliaobuqide{{cbd}}
    </div>
    <zujian></zujian>
  </div>
</template>
<script>
import zujian from '@/components/com1.vue'
export default {
  components: {
    zujian
  },
  data () {
    return {

    }
  },
  computed: {
    cbd () {
      return 'huiquba'
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.any {
  width: 100%;
}

</style>