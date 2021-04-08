<template>
  <div>
    <nav-bar class="nav-home">
      <h1 slot="center">
        购物街
      </h1>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "HomeNavBar",
  components: { NavBar }
};
</script>

<style scoped>
.nav-home {
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  z-index: 10;
}
</style>
