<template>
    <router-link
        :to="{name}"
        v-slot="{ isActive}"
        class="link tw-flex tw-flex-col tw-items-center "
    >
            <template >
                <slot></slot>
            </template>
            <span class="tw-text-xs tw-mt-0.5 " :class="[{ active: isActive }, { textColor: !isActive }]">
                {{ itemName }}
            </span>
    </router-link>
</template>
<script>
import {computed} from 'vue'
const navList = [
    { history: "История" },
    { create: "Создать" },
    { user: "Личный кабинет" }
]
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const itemName = computed(()=>{
            const name = navList.find((item) => Object.keys(item) == props.name);
            return Object.values(name).join("");
        })

        return {
            itemName
        }
    },
}
</script>
<style lang="scss">
.link {
    transition: all 0.2s ease-in-out;
    font-weight: 600;
    width: 30%;
    text-align: center;
    color: #000
}
  .router-link-exact-active {
    color: gray;
  }
</style>