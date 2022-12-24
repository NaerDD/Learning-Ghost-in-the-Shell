<template>
  <div>
  <school></school>
  <student></student>
  </div>
</template>

<script>
import School from './components/MySchool'
import Student from './components/MyStudent'

export default {
  name: 'App',
  components: {
    School,
    Student
  }
}
</script>
