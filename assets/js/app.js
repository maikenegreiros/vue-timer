import Vue from 'vue'
import Timer from '../components/Timer'

window.addEventListener("DOMContentLoaded", () => {
    const app = new Vue({
        el: '#app',
        components: { Timer }
    })
})
