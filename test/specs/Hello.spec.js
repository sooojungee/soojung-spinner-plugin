import Hello from 'src/Hello.vue'
import Spinner from 'src/Spinner.vue'
import { createVM } from '../helpers/utils.js'

describe('Hello.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
<Hello></Hello>
`, { components: { Hello }})
  })
})

describe('Spinner.vue', function () {
  it('should render correct contents', function () {
    createVM(this, '<Spinner></Spinner>', { components: { Spinner }})
  })
})
