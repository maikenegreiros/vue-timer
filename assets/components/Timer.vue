<template>
    <div id="app">
        <div class="timer-display">
            <p>
                <input @click="select($event.target)" @keyup.enter="countDown" @keydown="onlyNumbers($event)" v-model="minutes" class="timer-inputs minutes" type="text" maxlength="2" autofocus>:
                <input @click="select($event.target)" @keyup.enter="countDown" @keydown="onlyNumbers($event)" v-model="seconds" class="timer-inputs seconds" type="text" maxlength="2">
            </p>
        </div>
        <div class="actionbuttons">
            <button v-model="action" @click="countDown" type="button" name="button">{{action}}</button>
            <button @click="reset" type="button" name="button">Zerar</button>
        </div>
        <audio src="assets/sounds/alarm.mp3" preload="auto" id="alarm-audio"></audio>
    </div>
</template>

<script src="../js/Timer.js"></script>

<style src="../css/base.css"></style>
<style src="../css/timer.css" scoped></style>
