<template>
  <header class="menu-superior">
    <div class="menu-esquerdo">
      <span> <RouterLink to="/"> Home</RouterLink> </span>
      <span>|</span>
      <span><RouterLink to="/Artistas">Artistas</RouterLink> </span>
      <span>|</span>
      <span><RouterLink to="/Musicas"> Musicas </RouterLink> </span>
    </div>
    <div class="menu-direito">
      <span>Sair</span>
    </div>
  </header>
</template>

<style>
@import "@/assets/style.css";
@import "@/assets/base.css";
#app {
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
  font-weight: normal;
}
a {
  color: aliceblue;
  text-decoration: none;
}
header,
footer {
  background-color: rgb(166, 39, 39);
  color: white;
  height: 15%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}
header,
span {
  padding: 0 20px;
}
header.menu-superior {
  justify-content: space-between;
}
main {
  height: 70%;
}
</style>
