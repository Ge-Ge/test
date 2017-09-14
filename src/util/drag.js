/**
 * Created by lupin on 17-9-14.
 */
export class Drag {
  constructor (ele) {
    this.x = 0
    this.y = 0
    this.ele = ele
    this.relativeX = 0
    this.relativeY = 0
    this.init()
  }

  init () {
    this.ele.addEventListener('dragstart', (event) => {
      this.start(event)
    })
    this.ele.addEventListener('dragend', (event) => {
      // 获取不到坐标
      event.preventDefault()
      this.end(event)
    })
    this.ele.addEventListener('drag', (event) => {
      // 获取不到坐标
      console.log('拖拉过程中，在被拖拉的节点上持续触发。', event)
    })
    this.ele.addEventListener('mousedown', (event) => {
      this.relativeX = event.clientX - this.ele.offsetLeft
      this.relativeY = event.clientY - this.ele.offsetTop
    })
    document.addEventListener('dragenter', function (event) {
      // 可以获取鼠标位置
      event.preventDefault()
      console.log('dragenter---------------', event)
    })
    document.addEventListener('dragover', (event) => {
      // 可以获取鼠标位置
      event.preventDefault()
      this.drag(event)
      console.log('dragover', event)
    })
  }

  start (event) {
    event.dataTransfer.setData('text/plain', '')
    console.log(this.ele)
  }

  end (event) {
    console.log(this.x, this.y, '松开鼠标', event)
    event.target.style.left = this.x - this.relativeX + 'px'
    event.target.style.top = this.y - this.relativeY + 'px'
  }

  drag (event) {
    this.x = event.clientX
    this.y = event.clientY
    console.log(event, this, '拖动中---')
  }
}
