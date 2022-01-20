<template>
  <q-page padding>
    <!-- content -->
    <form @submit="onSubmit" class="column ">
      <base-input 
        v-model="dates"
        placeholder="Что-то"
        label="Дата обнаружения опасности : "
        id="date"
        
      ></base-input>
      <span>{{datesError}}</span>
      <base-select 
        v-model="subdivision"
        label="Структурное подразделение : "
        id="place"
        :options="[
                {name: `АУП АО 'Башнефтегеофизика' Ленина 13`, id: 1},
                {name: `АУП АО 'Башнефтегеофизика' Ленина 13`, id: 2},
                {name: `АУП АО 'Башнефтегеофизика' Ленина 13`, id: 3},
            ]"
      ></base-select>
      <span>{{subdivisionError}}</span>

      <base-input 
        v-model="place"
        placeholder="Что-то"
        label="Место обнаружения опасности : "
        id="place"
        
      ></base-input>
      <span>{{placeError}}</span>

      <base-textarea
        v-model="danger"
        placeholder="Что-то"
        label="Опасное действие/условие : "
        id="danger"
        
      ></base-textarea>
      <span>{{dangerError}}</span>

      <base-textarea
        v-model="measures"
        placeholder="Что-то"
        label="Какие меры предложены : "
        id="danger"
        
      ></base-textarea>
      <span>{{measuresError}}</span>

      <base-select 
        v-model="anonim"
        label="Анонимная подача : "
        id="anonim"
        :options="[
                {name: `не установлено`, id: 0},
                {name: `да`, id: 1},
                {name: `нет`, id: 2},
            ]"
      ></base-select>
      <span>{{anonimError}}</span>
      
      <div class="coulumn q-mt-md">
        <q-btn
            type="submit"
            :loading="loading"
            label="Войти"
            class="q-mr-md q-mt-md"
            color="primary"
          >
            <template v-slot:loading>
              <q-spinner-facebook />
            </template>
        </q-btn>
        <!-- <button type="submit" class="q-mr-md">Отправить</button> -->
        <!-- <q-btn type="button" class=" q-mt-md">Отменить</q-btn> -->
      </div>
      

    </form>
  </q-page>
</template>

<script>
  import moment from 'moment'
  import { useField, useForm } from 'vee-validate';
  import { useRouter, useRoute } from 'vue-router'
  import { useStore } from 'vuex'
import {ref} from 'vue'
import * as yup from 'yup';
import { setLocale } from 'yup';

setLocale({
    mixed: {
        default: 'Это поле эбязательно',
        required: 'Это поле эбязательно'
    }
});
export default {
  // name: 'PageName',
  setup(){
    const router = useRouter()
    const store = useStore()
    const loading = ref(false)
    
    const schema = yup.object({
        dates: yup.string().required(),
        subdivision: yup.string().required(),
        place: yup.string().required(),
        danger: yup.string().required(),
        measures: yup.string().required(),
        // attachments: yup.string().required(),
        anonim: yup.string().required(),
    });

    const {handleSubmit} = useForm({
      validationSchema: schema,
    });

    const { value: dates, errorMessage: datesError } = useField('dates');
    const { value: subdivision, errorMessage: subdivisionError } = useField('subdivision');
    const { value: place, errorMessage: placeError } = useField('place');
    const { value: danger, errorMessage: dangerError } = useField('danger');
    const { value: measures, errorMessage: measuresError } = useField('measures');
    // const { value: attachments, errorMessage: attachmentsError } = useField('attachments');
    const { value: anonim, errorMessage: anonimError } = useField('anonim');



    const onSubmit =  handleSubmit ( values => {
        // console.log(values)
        loading.value = true
        setTimeout(async()=>{
        await store.dispatch('kvo/kvocreate', values)
        // loading.value = false
        router.push({name: 'history'})
      }, 3000) 
      
    });

    return {
      dates,
      subdivision,
      place,
      danger,
      measures,
      // attachments,
      anonim,
      datesError,
      subdivisionError,
      placeError,
      dangerError,
      measuresError,
      // attachmentsError,
      anonimError,
      loading,
      onSubmit
    }
  }
}
</script>
