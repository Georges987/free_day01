<script setup>
import { ref } from 'vue'
import { getUser } from './service/user.service.js'
const user = ref({})

const fetchUser = async () => {
  user.value = await getUser()
}

fetchUser()
</script>

<template>
  <div>
    {{ user }}
  </div>
</template>