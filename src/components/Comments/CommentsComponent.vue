<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

interface Comment {
  text: string
  author: string
  src: string
}

const comments = ref<Comment[]>([{
  text: '', author: '', src: ''
}])

async function getComments() {
  try {
    const response = await axios.get('http://localhost:3000/comments')
    comments.value = response.data
  } catch (error) {
    console.error('Комментарии не найдены: ', error)
  }
}

onMounted(getComments)
</script>

<template>
  <div class="container" id="comments">
    <div class="text">
      Исследуем <div>эффективность</div>, <div>технологичность</div> и <div>юзер-экспириенс</div>.
      <br><br>
      Большие люди доверяют <div>CodeCrafters</div>.
    </div>

    <div class="button">
      <div>Примеры работ</div>
      <span></span>
      <img src="../../assets/images/link-arrow.svg" alt="">
    </div>

    <div class="boxes">
      <div
        v-for="(comment, i) in comments" :key="comment"
        :class="'box-' + (i + 1)" class="box"
      >
        <div class="text">{{ comment.text }}</div>

        <div class="bottom">
          <div class="circle"></div>
          <div class="author">{{ comment.author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/styles/colors";

.container {
  height: 600px;
  background: $dark-2;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.text {
  color: #7e7e7e;
  font-weight: 300;
  line-height: 1;

  div {
    display: inline-block;
    font-weight: 400;
    color: white;
  }
}

.button {
  margin-top: 50px;
  display: flex;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  color: $dark-2;
  width: 300px;
  justify-content: center;
  cursor: pointer;
  border: 1px solid white;

  div {
    padding: 13px 30px;
    width: 60%;
  }

  span {
    width: 1px;
    background: black;
  }

  img {
    filter: invert(1);
    margin: 0 auto;
    width: 20px;
  }

  &:hover {
    border-radius: 20px;

    div {
      color: white;
      background: $dark-2;
    }
  }
}

.boxes {
  margin-top: 70px;
  display: flex;
  width: 70%;
  height: 250px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 80px;

  .box {
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
    padding: 20px;
    font-size: 18px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .text {
      color: white;
    }

    .bottom {
      .circle {
        width: 50px;
        height: 50px;
        background: #000;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .author {
        color: #c6c6c6;
        font-weight: 300;
        margin-top: 10px;
        font-size: 15px;
      }
    }
  }

  .box-1 {
    border-left: 0;
    .bottom {
      .circle {
        background: #50655f;
      }
    }
  }

  .box-2 {
    .bottom {
      .circle {
        background: #565065;
      }
    }
  }

  .box-3 {
    .bottom {
      .circle {
        background: #656150;
      }
    }
  }
}
</style>