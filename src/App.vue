<template>
  <div id="app">
    <h1>Typewriter</h1>
    <section id="task">
      <span :key="id" v-for="(word, id) in words">{{ word }} </span>
    </section>
    <input
      id="typer"
      placeholder="Type your words, don't be shy..."
      v-model="text"
      :class="{empty: check === 0, right: check === 1, wrong: check === -1}"
    >
  </div>
</template>

<script>
import _ from 'lodash'
import Config from './config.js'

const n = 7
let task = null
let typer = null

export default {
  name: 'App',

  data() {
    return {
      text: "",
      dict: [],
      words: [],
      check: 0
    }
  },

  mounted() {
    task = document.getElementById('task')
    typer = document.getElementById('typer')
  },

  async created() {
    // Fetch words from dictionary.
    let wordsObject = await fetch(Config.WORDS_JSON_LINK).then(r => r.json())
    this.dict = Object.keys(wordsObject)

    this.pushWords()
    typer.addEventListener('keyup', this.updateWords)
  },

  watch: {
    text: function(val) {
      if (val.length === 0) {
        this.check = 0
        return
      }

      let right = val === task.innerText.substring(0, val.length)
      this.check = right? 1 : -1
    }
  },

  methods: {
    pushWords() {
      this.words = []

      for (let i = 0; i < n; i++) {
        let word = this.dict[_.random(this.dict.length - 1)]
        this.words.push(word)
      }
    },

    updateWords(e) {
      if (document.activeElement === typer && e.key === 'Enter') {
        this.text = ""
        this.pushWords()
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: none;
}

body {
  background-color: var(--light-grey);
}

:root {
  --main-color: #2C3E50;
  --light-grey: #EEEEEE;
  --right-color: #03DAC6;
  --wrong-color: #B00020;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-color);
  width: 80%;
  max-width: 600px;
  margin: auto;
  margin-top: 10vh;
  padding: 30px;
  background-color: white;
  border-radius: 5px;
  -webkit-box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.5);
  box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.5);
}

h1 {
  text-align: center;
  margin: 0 auto 30px auto;
}

section {
  font-size: 16px;
  line-height: 32px;
}

input {
  font-size: 16px;
  line-height: 32px;
  margin-top: 15px;
  border: none;
  width: 100%;
}
.right {
  border-bottom: 3px solid var(--right-color);
  transition: border 0.3s;
}
.wrong {
  border-bottom: 3px solid var(--wrong-color);
  transition: border 0.3s;
}
.empty {
  border-bottom: 3px solid var(--light-grey);
  transition: border 0.3s;
}
</style>
