export default {
    data() {
        return {
            title: 'Timer',
            minutes:"00",
            seconds:"00",
            action: "Iniciar",
            counting: false,
            timerId: 0,
            audioId: "alarm-audio",
            audio: null,
            actionButtons: true,
            resetState: false
        }
    },
    methods: {
        select(button) {
            button.select()
        },
        countDown() {
            if (this.counting) {
                this.pause();
            } else {
                this.timerId = setInterval(() => {
                    this.start()
                }, 1000)
            }
        },
        start() {
            if (this.minutes == 0 && this.seconds == 0) {
                this.counting = false
                this.action = "Iniciar"
                this.finish()
            } else {
                this.counting = true
                this.action = "Pausar"
                this.countDownSeconds()
            }
        },
        pause () {
            this.counting = false;
            this.action = "Iniciar"
            clearInterval(this.timerId)
        },

        countDownMinutes() {
            if (this.minutes == 0) {
                this.minutes = 60
            }
            this.minutes --
            if (this.minutes.toString().length === 1) {
                this.minutes = `0${this.minutes}`
            }
        },
        countDownSeconds() {
            if (this.seconds == 0) {
                this.countDownMinutes()
                this.seconds = 60
            }
            this.seconds --
            if (this.seconds.toString().length === 1) {
                this.seconds = `0${this.seconds}`
            }
        },
        finish() {
            clearInterval(this.timerId)
            if (!this.resetState) {
                this.ring()
            } else {
                this.resetState = false
            }
        },
        reset() {
            this.hours = "00"
            this.minutes = "00"
            this.seconds = "00"
            this.resetState = true
        },
        ring() {
            this.audio = document.querySelector(`#${this.audioId}`)
            this.audio.play()
            navigator.vibrate([100, 100, 200, 100, 300])
        },
        onlyNumbers(event) {
            if (event.which >=65 && event.which <=90) {
                event.preventDefault()
            }
        }
    }
}
