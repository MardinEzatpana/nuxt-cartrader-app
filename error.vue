<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<template>
  <div class="flex h-screen justify-center items-center flex-col bg-gradient-to-b from-white to-cyan-200">
    <h1 class="text-9xl">{{ error.statusCode }}</h1>
    <p class="mt-7 text-4xl">{{ error.message }}</p>
    <button
      @click="handleError"
      class="rounded-full mt-7 text-2xl bg-sky-300 px-7 py-4 text-white"
    >
      Go Back
    </button>
  </div>
</template>