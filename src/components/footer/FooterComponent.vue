<template>
  <div class="container">
    <img class="logo" src="../../assets/images/codecrafters-logo.svg" alt="">
    <div class="date">©{{ new Date().getFullYear() }}, CodeCrafters</div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15%;
    font-size: 15px;
    font-weight: 300;
    color: #cfcfcf;
  }
</style>