<template>
  <div id="app">
    <app-nav />
    <NotificationContainer />
    <div class="main">
      <router-view class="container" />
    </div>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
import NotificationContainer from './components/NotificationContainer'

export default {
  components: { AppNav, NotificationContainer }
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
  // max-width: 90rem;
  width: 100%;
}

html,
body {
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
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

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  display: flex;
  flex-grow: 1;
  // background: linear-gradient(0deg, #e91e63, #d2517e 71.5%);
}

.container {
  max-width: 1200px;
  margin: 3rem auto;
}

.form {
  flex-grow: 1;
  // width: 90%;
  max-width: 640px;
  // margin: 0 auto;
  padding: 0 3rem 3rem;
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
    color: #acacac;
    letter-spacing: 4px;
  }

  input,
  select {
    display: block;
    text-align: left;
    height: 6.2rem;
    width: 100%;
    margin-top: 0.8rem;
    padding: 0 1rem;
    font-size: 2rem;
    box-sizing: border-box;
    vertical-align: middle;
    border-radius: 1rem;
    color: #d3d9fe;
    background-color: #58626e;
    border: 1px solid #58626e;
    outline: none;
  }
  input::selected {
    background-color: #58626e;
  }
  input::placeholder {
    color: #d3d9fe;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background: #58626e
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
