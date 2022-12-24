<template>
  <div class="school">
  <h2>学校名称{{name}}</h2>
  <h2>学校地址{{address}}</h2>
</div>
</template>

<script>
export default {
  name:'School',
  data() {
    return {
      name:'尚硅谷',
      address:'重庆渝中'
    }
  },
}
</script>

<style>
  .school{
    background-color: rgb(110, 39, 39);
  }
</style>