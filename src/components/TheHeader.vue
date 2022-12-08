<template>
  <header class="h-12 bg-green flex flex-row justify-around">
    <h1 class="inline-block text-black"></h1>
    <nav class="w-full min-h-full">
      <ul
        class="pt-2 flex flex-row justify-around text-white text-lg text-center"
      >
        <li class="basis-1/12 border-r-2 border-white">
          <i class="fa-solid fa-utensils text-2xl text-white"></i>
        </li>
        <li class="basis-1/3 border-r-2 hover:text-white hover:cursor-pointer">
          Recettes
        </li>
        <li class="basis-1/3 border-r-2 hover:text-white hover:cursor-pointer">
          Planning
        </li>
        <li class="basis-1/3 border-r-2 hover:text-white hover:cursor-pointer">
          Paramètres
        </li>
        <li class="basis-1/3 hover:text-white hover:cursor-pointer">Autres</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "the-header",
};
</script>
