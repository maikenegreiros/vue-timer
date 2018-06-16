<template>
    <div id="app">
        <div class="timer-display">
            <p>
                <input v-model="hours" class="hours" type="number" value="00">:
                <input v-model="minutes" class="minutes" type="number" value="00">:
                <input v-model="seconds" class="seconds" type="number" value="00">
            </p>
        </div>
        <button v-on:click="countDown" type="button" name="button">Começar</button>
        <button v-on:click="reset" type="button" name="button">Reset</button>
    </div>
</template>

<script src="../js/Timer.js"></script>
