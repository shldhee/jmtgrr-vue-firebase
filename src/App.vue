<template>
  <div id="app">
    <app-nav />
    <NotificationContainer />
    <div class="main">
      <router-view class="container" />
    </div>
    <div class="fixed">
      <ul class="fixed_list">
        <!-- <li class="fixed_item">JMTgram</li> -->
        <li class="fixed_item fixed_item-sns">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />
        </li>
        <li class="fixed_item">© 2019 JMTgram</li>
      </ul>
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
  padding: 1rem;
  font-size: 1.4rem;
  color: #ffffff;
  background-color: #0ed3d9;
  border: none;
  border-radius: 0.4rem;
  box-shadow: 0 0.4rem 0 0 #00b2b7;
  min-width: 12rem;
  margin-top: 2rem;
  transition: all 1s;

  &:hover {
    background-color: #04cfd6;
    box-shadow: 0 0.4rem 0 0 #008287;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #04cfd6;
    box-shadow: 0 0.4rem 0 0 #008287;
  }

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    box-shadow: 0 0.4rem 0 0 #777777;
    transform: translateY(0px);
  }
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  display: flex;
  // flex-grow: 1;
  // background: linear-gradient(0deg, #e91e63, #d2517e 71.5%);
}

.container {
  width: 100%;
  max-width: 1200px;
  display: flex;
  margin: 3rem auto;
  flex-direction: column;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  max-width: 480px;
  width: 100%;
  padding: 3rem;
  border-radius: 2rem;

  &_title {
    text-align: center;
    width: 100%;
    font-size: 2rem;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #0ed3d9;
  }
}

.group {
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 1rem 0;

  label {
    font-size: 1.8rem;
    transition: all 1s;
  }

  label.fontSmall {
    font-size: 1.4rem;
  }

  input,
  select {
    display: block;
    text-align: left;
    height: 4.2rem;
    width: 100%;
    margin-top: 0.8rem;
    padding: 0 1rem;
    font-size: 1.6rem;
    box-sizing: border-box;
    // vertical-align: middle;
    font-weight: bold;
    border-radius: 1rem;
    color: #222222;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    outline: none;
  }
  input::selected {
    background-color: #58626e;
  }
  input::placeholder {
    font-size: 1rem;
    color: #b2b2b2;
    font-weight: 400;
  }

  input::-webkit-input-placeholder {
    font-size: 1.2rem;
  }
  input::-moz-placeholder {
    font-size: 1.2rem;
  }
  input:-ms-input-placeholder {
    font-size: 1.2rem;
  }
  input:-moz-placeholder {
    font-size: 1.2rem;
  }
  input::placeholder {
    font-size: 1.2rem;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background: #58626e
      url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNiIgd2lkdGg9IjEwIj48cG9seWdvbiBwb2ludHM9IjAsMCAxMCwwIDUsNiIgc3R5bGU9ImZpbGw6cmdiYSgwLDAsMCwuMjQpOyIvPjwvc3ZnPg==)
      no-repeat right 12px center;
    background-color: #ffffff;
  }
}

.message_err {
  color: orangered;
}

.error {
  border: 1px solid orangered;
  padding: 1rem;
  border-radius: 1rem;
}

.link {
  margin: 10px 0;
  &_text {
    font-size: 1.2rem;
  }

  &_btn {
    // text-decoration: none;
    font-weight: bold;
    color: #0ed3d9;
  }
}

.fixed {
  position: fixed;
  right: 20px;
  bottom: 20px;
  &_list {
    margin: 0;
  }

  &_item {
    margin: 4px 0;
    list-style: none;
    font-sinze: 1.2rem;
    color: #57cdd1;

    &-sns {
      font-size: 20px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
