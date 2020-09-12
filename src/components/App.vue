<template>
  <div class>App component displays a {{ value }}</div>
</template>

<script>
export default {
  data: () => ({
    value: "random value",
  }),
  mounted() {
    console.log(process.env.VUE_APP_ROOT_URL);
  },
};
</script>

<style lang="scss" scoped></style>
