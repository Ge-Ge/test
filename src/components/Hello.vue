<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
            <br>
            <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul draggable='true' @dragstart="ondragstart" @dragend="end" class="test" ref="test">

        </ul>
    </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      ondragstart: function (event) {
        event.dataTransfer.setData('Text', event)
        console.log(event)
      },
      end: function (event) {
        console.log(event, '松开鼠标')
        event.preventDefault()
        event.target.style.left = event.clientX + 'px'
        event.target.style.top = event.clientY + 'px'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .test {
        display: block;
        height: 100px;
        width: 100px;
        position: absolute;
        background-color: #eee;
    }
</style>
