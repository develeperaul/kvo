<template>
    <div class=" q-mt-md column items-start">
        <label class="label q-pr-md " :for="id">{{label}}</label>
        <textarea class="field" :value="modelValue" @input="(event) => $emit('update:modelValue', event.target.value)" :id="id" cols="30" rows="3"></textarea>
    </div>
</template>
<script>
export default {
    name: 'base-textarea',
    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        id: {
            type: [String, Number],
            default: ''
        },
    }
}
</script>