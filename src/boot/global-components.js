
import BaseInput from 'src/components/core/BaseInput.vue'
import BaseSelect from 'src/components/core/BaseSelect.vue'
import BaseTextarea from 'src/components/core/BaseTextarea.vue'



export default ({ app }) => {
  app.component('base-input', BaseInput)
  app.component('base-select', BaseSelect)
  app.component('base-textarea', BaseTextarea)
}