<template>
  <div class="container">
    <div class="title">
      Используем новейшие скоростные технологии.
      <div class="blur blur-4"></div>
    </div>

    <div class="content">
      <div class="image">
        <img src="../../assets/images/technologies/cpu.svg" alt="">
        <div class="blur blur-1"></div>
        <div class="blur blur-2"></div>
        <div class="blur blur-3"></div>
      </div>

      <div class="boxes">
        <div class="border-gradient border-gradient-vue">
          <div class="box box-vue">
            <img src="../../assets/images/technologies/vue.svg" alt="">
            <div class="box-bottom">
              <div class="box-title">Vue</div>
              <div class="box-text">Доступный, производительный и гибкий фреймворк для создания пользовательских интерфейсов.</div>
            </div>
          </div>
        </div>

        <div class="border-gradient border-gradient-express">
          <div class="box box-express">
            <img src="../../assets/images/technologies/express.svg" alt="">
            <div class="box-bottom">
              <div class="box-title">Express</div>
              <div class="box-text">Быстрый, гибкий, минималистичный веб-фреймворк для приложений Node.js.</div>
            </div>
          </div>
        </div>

        <div class="border-gradient border-gradient-mongodb">
          <div class="box box-mongodb">
            <img src="../../assets/images/technologies/mongodb.svg" alt="">
            <div class="box-bottom">
              <div class="box-title">MongoDB</div>
              <div class="box-text">Кроссплатформенная документально-ориентированная программа баз данных с доступным исходным кодом.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

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

  </div>
</template>

<style scoped lang="scss">
@import "../../assets/styles/colors";

.container {
  height: 950px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  gap: 70px;
  background: $dark-2;
  width: 100%;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(to left, rgba($dark-2, 0), rgba($dark-2, 1) 10%, rgba($dark-2, 1) 90%, rgba($dark-2, 0));
}

.blur {
  position: absolute;
  width: 300px;
  height: 300px;
  background: rgba($dark-2, .5);
  left: -100px;
  top: -50px;
  backdrop-filter: blur(5px);
  mask-image: radial-gradient(rgba($dark-2, 1), rgba($dark-2, 0) 80%);
  pointer-events: none;
}


.blur-2 {
  left: auto;
  top: -20px;
  right: -100px;
}

.blur-3 {
  left: 45%;
}

.blur-4 {
  left: 0;
  top: -50px;
  width: 600px;
  mask-image: linear-gradient(to right, rgba($dark-2, .8), rgba($dark-2, 0));
}

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
  top: 45%;
  right: -5%;
}

.subcontent-4 {
  top: 90%;
  left: -5%;
}

.title {
  font-size: 50px;
  line-height: 45px;
  width: 700px;
  background: linear-gradient(-100deg, $gradient-6);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  margin-top: 7%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 10;

  .image {
    width: 60%;
    position: relative;

    img {
      transform: translateX(-5px);
      width: 100%;
      display: block;
    }
  }

  .boxes {
    display: flex;
    justify-content: center;
    gap: 8.5%;
    width: 100%;

    .border-gradient {
      width: 20%;
      height: 300px;
      border-radius: 30px;
      padding: .06em;

      .box {
        background: $dark-1;
        width: 100%;
        height: 100%;
        border-radius: 30px;
        box-sizing: border-box;
        padding: 20px;
        mask-size: 200%;

        img {
          height: 70px;
          margin-bottom: 20px;
        }

        .box-title {
          font-size: 30px;
          margin-bottom: 10px;
        }

        .box-text {
          font-weight: 300;
          font-size: 16px;
          line-height: 20px;
        }
      }

      .box-vue {
        .box-title { color: #1cbd93; }
        .box-text { color: #79978f; }
        img { width: 90px }
        mask-image: linear-gradient(-80deg, rgba(255, 255, 255, 0.9) 10%, #ffffff 30%, rgba(255, 255, 255, 0.9) 90%);
        animation: shine 3s infinite linear;
      }

      @keyframes shine {
        from { -webkit-mask-position: 150%; }
        to { -webkit-mask-position: -50%; }
      }

      .box-express {
        .box-title { color: #d5da3a; }
        .box-text { color: #939378; }
        img { width: 85px }
        mask-image: linear-gradient(-90deg, rgba(255, 255, 255, 0.9) 10%, #ffffff 50%, rgba(255, 255, 255, 0.9) 90%);
        animation: shine 3.2s infinite linear;
      }

      .box-mongodb {
        .box-title { color: #2dbacf; }
        .box-text { color: #758c8e; }
        img { height: 85px }
        mask-image: linear-gradient(-70deg, rgba(255, 255, 255, 0.9) 10%, #ffffff 70%, rgba(255, 255, 255, 0.9) 90%);
        animation: shine 4s infinite linear;
      }
    }

    .border-gradient-vue {
      background: linear-gradient(200deg, $gradient-7);
      box-shadow: 0 3px 3px 0 rgba(15, 92, 71, 0.51);
    }

    .border-gradient-express {
      background: linear-gradient(50deg, $gradient-8);
      box-shadow: 0 3px 3px 0 rgb(66, 66, 45);
    }

    .border-gradient-mongodb {
      background: linear-gradient(220deg, $gradient-9);
      box-shadow: 0 3px 3px 0 rgb(50, 83, 87);
    }
  }
}
</style>