<template>
  <q-page padding class="column">
    <span>Название: {{item.name}}</span>
    <span>Дата подачи КВО: {{item.dates}}</span>
    <span>Структурное подразделение: {{item.subdivision}}</span>
    <span>Место обнаружения опасности: {{item.place}}</span>
    <span>Опасное действие/условие: {{item.danger}}</span>
    <span>Меры предприняты/предложены: {{item.measures}}</span>
    <span>Вложения</span>
    <span>Статус: {{item.status}}</span>

    <span>Комментарий</span>

  </q-page>
</template>

<script>
import {computed} from 'vue'
import { useStore } from 'vuex'
import {useQuasar} from 'quasar'
import { useRoute } from 'vue-router'
export default {
  // name: 'PageName',
  setup(props){
    const store = useStore();
    const route = useRoute();
    const $q = useQuasar()
    $q.loading.show()
    setTimeout(()=>{
      // store.dispatch('kvo/kvopage', route.params.id)
      $q.loading.hide()
    }, 2000)
    return {
      item: computed(()=>store.getters['kvo/kvoList'].find(i=>i.id == route.params.id))
    }
  }
}
</script>
