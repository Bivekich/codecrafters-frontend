<template>
  <div class="container">
    <img class="logo" src="https://imgur.com/oGsc8iy.png" alt="">
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

@media only screen and (max-width: 600px) {
  .container {
    height: 130px;
    font-size: 13px;
  }
}
</style>