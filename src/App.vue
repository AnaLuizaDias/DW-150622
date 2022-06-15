<script setup>
import HeaderComp from "@/components/Template/HeaderComp.vue";
import FooterComp from "@/components/Template/FooterComp.vue";
</script>
<template>
  <HeaderComp />
  <main>
    <RouterView />
  </main>
  <FooterComp />
</template>
