<template>
  <q-page padding>
    <span>история поданных КВО</span>
    <div class="list">
      <div v-for="item in list" :key="item.id" class="item" >
        <span class="title">
          {{item.name}}
        </span>
        <span class="status">
          {{item.status}}
        </span>
        <router-link :to="{name:'page', params:{id: item.id}}">
          <span>Посмотреть</span>
        </router-link>
        
      </div>

    </div>
  </q-page>
</template>

<script>
import {ref} from 'vue'
import { useStore } from 'vuex'
import {useQuasar} from 'quasar'

export default {
  // name: 'PageName',
  setup(props){
    const store = useStore();
    const $q = useQuasar()

    const list = ref([])
    $q.loading.show()
    
    setTimeout(()=>{
      // store.dispatch('kvo/kvolist')
      list.value = store.getters['kvo/kvoList']
      $q.loading.hide()
    }, 2000)
    
    
    return {
      list
    }
  }
}
</script>
<style lang="scss">
  .title {
    font-weight: 600;
  }
  .status {
    font-weight: 500;
  }
  .list {
    display: flex;
    flex-direction: column;
  }
  .item {
    display: flex;
    justify-content: space-between;
  }
</style>
