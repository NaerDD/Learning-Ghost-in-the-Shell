<template>
  <div>
   
    <Student/><hr>
    <School/>
    
  </div>
</template>

<script>
import Student from '../04_src_mixin混入/components/Student.vue'
import School from '../04_src_mixin混入/components/School.vue'

export default {
  name:'App',
  components:{Student,School},
  
}
</script>

<style>

</style>