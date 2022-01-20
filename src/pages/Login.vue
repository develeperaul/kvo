<template>
  <q-page padding>
    <!-- content -->
    <q-img
      src="logo.jpeg"
      fit="contain"
      width="100px"
      class="q-mx-auto"
      style="display:block"
    >

    </q-img>
    <form  @submit.prevent="onSubmit" class="column ">
    <q-input outlined v-model="login" label="Логин" class="q-mt-md"></q-input>
    <span class="text-danger">{{ loginError }}</span>
      <q-input outlined v-model="password" :type="isPwd ? 'password' : 'text'" label="Пароль" class="q-mt-md">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <span class="text-danger">{{ passwordError }}</span>

      <span class="text-danger text-center">{{ err }}</span>

     <q-btn
        type="submit"
        :loading="loading"
        label="Войти"
        class="q-mx-auto q-mt-md"
        color="primary"
      >
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
    
      </form>
  </q-page>
</template>

<script>
import { ref, computed  } from 'vue';
import { useStore } from 'vuex'
import { useField, useForm } from 'vee-validate';
import { useRouter, useRoute } from 'vue-router'

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
    // const login = ref('')
    const err = ref('')
    const isPwd = ref(true)
    const store = useStore()
    const router = useRouter()

    const schema = yup.object({
        login: yup.string().required().matches(/^[A-zА-яЁё]+$/i,'введите только буквы'),
        password: yup.string().required()
    });
    const {handleSubmit, resetForm  } = useForm({
      validationSchema: schema,
    });
    const { value: login, errorMessage: loginError } = useField('login');
    const { value: password, errorMessage: passwordError } = useField('password');
    const isAuth = computed(() => store.getters['auth/isAuth'])
    const loading = ref(false)
    
    const onSubmit =  handleSubmit ( values => {
        loading.value = true
        setTimeout(async()=>{
        await store.dispatch('auth/getUser', values)
        loading.value = false
        
        if(!isAuth.value){
          resetForm()
            
              err.value = "не правильный логин или пароль"
          
          // login.value = undefined
          // password.value = undefined
        }else {
          router.push({name: 'history'})
        }
          
        
      }, 3000) 
      
    });

    
    return {
      login,
      password,
      isPwd,
      loginError,
      passwordError,
      err,
      onSubmit,
      loading
    }
  }
}
</script>
