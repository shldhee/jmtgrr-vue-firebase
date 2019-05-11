<template>
  <div id="app">
    <app-nav />
    <router-view class="form" />
  </div>
</template>

<script>
import AppNav from './components/AppNav'

export default {
  components: { AppNav }
}
</script>

<style lang="scss">
html {
  font-size: 62.5%;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.2rem;
  color: #2c3e50;
  margin: 0 auto;
  padding: 0;
  max-width: 64rem;
  width: 100%;
}

button {
  outline: none;
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 2rem;
  color: #ffffff;
  background-color: #f3664e;
  border: none;
  border-radius: 0.4rem;
  box-shadow: 0 0.4rem 0 0 #de5440;
  min-width: 12rem;
  margin-top: 2rem;
  transition: all 1s;

  &:hover {
    background-color: #fb8368;
    box-shadow: 0 0.4rem 0 0 #f1735c;
  }

  &:active {
    background-color: #df5c48;
    box-shadow: 0 0.4rem 0 0 #d3523e;
  }

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    box-shadow: 0 0.4rem 0 0 #777777;
  }
}

.form {
  // width: 90%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.group {
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 1rem 0;

  label {
    font-size: 2.6rem;
  }

  input,
  select {
    display: block;
    text-align: left;
    height: 5.2rem;
    width: 100%;
    margin-top: 0.8rem;
    padding: 0 1rem;
    font-size: 2rem;
    box-sizing: border-box;
    vertical-align: middle;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background: #fff
      url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNiIgd2lkdGg9IjEwIj48cG9seWdvbiBwb2ludHM9IjAsMCAxMCwwIDUsNiIgc3R5bGU9ImZpbGw6cmdiYSgwLDAsMCwuMjQpOyIvPjwvc3ZnPg==)
      no-repeat right 12px center;
  }
}

.message_err {
  color: orangered;
}

.error {
  border: 1px solid orangered;
}
</style>
