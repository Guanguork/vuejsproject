<template>
    <div>
        <ul class="navigation">
            <li class="link"><a href="/">Home</a></li>
            <li class="link"><a href="/settings">Settings</a></li>
        </ul>
       {{myData}}
    </div>
</template>
<script>
export default {
  name: "Header",
  data: function() {
    return {
      myData: ["Home", "Settings"]
    };
  }
};
</script>
<style scoped lang="scss">
.navigation {
  text-align: left;
 
  list-style-type: none;
  -webkit-margin-before: 0em;
  -webkit-margin-after: 0em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0px;
   padding: 1rem;
  li.link {
    font-size: 1rem;
    color: white;
    list-style: none;
    display: inline-block;
    a {
      color: white;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
