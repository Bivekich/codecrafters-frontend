<template>
  <div class="subcontent subcontent-1">
    <div class="html">HTML</div>
    <div class="git">Git</div>
    <div class="pinia">Pinia</div>
  </div>

  <div class="subcontent subcontent-2">
    <div class="webpack">Webpack</div>
    <div class="vite">Vite</div>
    <div class="router">Router</div>
  </div>

  <div class="subcontent subcontent-3">
    <div class="scss">SCSS</div>
    <div class="typescript">TypeScript</div>
  </div>

  <div class="subcontent subcontent-4">
    <div class="sanity">Sanity</div>
    <div class="nodejs">Node.js</div>
    <div class="react">React</div>
    <div class="bootstrap">Bootstrap</div>
  </div>
</template>

<style scoped lang="scss">
.subcontent {
  position: absolute;
  display: flex;
  gap: 30px;
  opacity: .7;

  div {
    width: 80px;
    border-radius: 50px;
    padding: 5px 20px;
    font-size: 15px;
    font-weight: 300;
  }

  @mixin subcontent($color) {
    color: $color;
    border: 1px solid $color;
    background: rgba($color, .1);
  }

  .html { @include subcontent(#ae7a5a); }
  .git { @include subcontent(#869495); }
  .pinia { @include subcontent(#779853); }
  .webpack { @include subcontent(#538b98); }
  .vite { @include subcontent(#574a8c); }
  .router { @include subcontent(#359852); }
  .scss { @include subcontent(#87394d); }
  .typescript { @include subcontent(#988c3c); }
  .sanity { @include subcontent(#8f4f4f); }
  .nodejs { @include subcontent(#588f4f); }
  .react { @include subcontent(#646a63); }
  .bootstrap { @include subcontent(#257e7e); }
}

.subcontent-1 {
  top: 5%;
  right: -5%;
}

.subcontent-2 {
  top: 25%;
  left: -5%;
}

.subcontent-3 {
  top: 40%;
  right: -5%;
}

.subcontent-4 {
  top: 90%;
  left: -5%;
}
</style>