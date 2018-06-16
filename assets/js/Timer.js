export default {
    data() {
        return {
            title: 'Timer',
            hours:"00",
            minutes:"00",
            seconds:"00",
        }
    },
    methods: {
        countDown() {
            let hours = document.querySelector('.hours').value
            let minutes = document.querySelector('.minutes').value
            let seconds = document.querySelector('.seconds').value

            let timerId = setInterval(() => {
                countDown()
            }, 1000)

            const countDown = () => {
                if (this.hours == 0 && this.minutes == 0 && this.seconds == 0) {
                    finish()
                } else {
                    countDownSeconds()
                }
            }

            const countDownHours = () => {
                this.hours --
            }

            const countDownMinutes = () => {
                if (this.minutes == 0) {
                    countDownHours()
                    this.minutes = 60
                }
                this.minutes --
            }

            const countDownSeconds = () => {
                if (this.seconds == 0) {
                    countDownMinutes()
                    this.seconds = 60
                }
                this.seconds --
            }

            const finish = () => {
                console.log("O tempo acabou")
                clearInterval(timerId)
            }
        },
        reset() {
            this.hours = "00"
            this.minutes = "00"
            this.seconds = "00"
        }
    }
}
