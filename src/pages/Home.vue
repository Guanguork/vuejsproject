<template>
  <div class="welcome-class">
    <Header></Header>
    <h2>{{mainText}}</h2>
    
  </div>
</template>

<script>
// Set the parent router view.
// The parent route component is Home.vue in pages.
// Loads home.vue from here.
import Header from './components/Header.vue'
  export default {
    name: 'Home',
    data: function(){
      return {
        mainText: 'Home'
      }
    },
    components: {Header}
  }
</script>

<style scoped lang="scss">
  .welcome-class {
    padding: 5rem;
    display: block;
    h2 {
      margin-top: 0;
      margin-bottom: 2em;
    }
    padding: 0;
    background: tomato;
    border-radius: 4px;
    font-size: 24px;
    text-align: center;
    .btn-wrapper {
     
      a {
        color: #fff;
        text-decoration: none;
        padding: 1rem;
        border-radius: 3px;
      }
      .hi {
        background: #6c6cd6;
      }
      .bi {
        background: #d66c87
      }
    }
  }
</style>