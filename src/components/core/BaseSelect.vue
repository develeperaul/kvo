<template>
    <div class="q-mt-md column">
        <label class="label q-pr-md " :for="id">{{label}}</label>
        <select class="field" :id="id" :value="modelValue" @change="updateSel">
            
            <option 
                v-for="option in options"  
                :value="option.id === 0? '':option.id " 
                :key="option.id"
                :hidden="option.id === 0 ? true:false"
                :selected="option.id === 0 ? true:false"
                :disabled="option.id === 0 ? true:false"
                >
                    {{option.name}}
            </option>
        </select>
    </div>
</template>
<script>
export default {
    name: 'base-select',
    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },
        options: {
            type: Array,
            required: true
        },
        label: {
            type: String,
            default: ''
        },
        id: {
            type: [String, Number],
            default: ''
        },
    },
    methods: {
        updateSel(event){
           this.$emit('update:modelValue', event.target.value)
        }
    },
}
</script>