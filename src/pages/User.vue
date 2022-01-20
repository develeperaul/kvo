<template>
  <q-page padding>
    <!-- content -->
    <div>
      Имя: {{name}}
    </div>
    <div>
      Фамилия: {{last_name}}
    </div>
    <button @click="logOut">
      Выйти
    </button> 
  </q-page>
</template>

<script>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {computed} from 'vue'
export default {
  // name: 'PageName',
  setup(){
    const store = useStore()
    const router = useRouter()
    const logOut = function(){
      store.commit('auth/login', false)
      router.push({name:'auth'})
    }
    return {
      name: computed(()=>store.getters['auth/user'].name),
      last_name: computed(()=>store.getters['auth/user'].last_name),
      logOut
    }
  }
}
</script>
