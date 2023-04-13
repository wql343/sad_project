import { createVNode, render } from 'vue'
import toast from './toast.vue'

export function Toast(type, msg) {
  const container = document.createElement('div');
  const vm = createVNode(toast, { type: type, msg: msg })
  render(vm, container)
  document.body.append(container)

  const timer = setTimeout(() => {
    render(null, container)
    document.body.removeChild(container)
    clearTimeout(timer)
  }, 3000)
}