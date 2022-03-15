import { mount } from  '@vue/test-utils'
import App from  '@/App.vue'
import { egg, spinach } from '../../jestTest'

const  wrapper = mount(App)
const  vm = wrapper.vm

console.log(vm.$data)

describe('Product quality is going to be test', () => {

  test('Egg quality', () => {
    expect(egg().status[0]).toBe('fresh')
  })

  test('Spinach quality', () => {
    expect(spinach()).toEqual({
      status: 1,
      color: 'green'
    })
  })

})
