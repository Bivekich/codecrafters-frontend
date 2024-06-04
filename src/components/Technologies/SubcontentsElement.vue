<script setup lang="ts">
import type Technology from '@/components/Technologies/TechnologyInterface'

defineProps<{
  technologies: Array<Technology>
}>()
</script>

<template>
  <div v-for="number in 4" :key="number" :class="'subcontent subcontent-' + number">
    <div v-for="subconent in technologies.filter((element) => element.group == number)" :key="subconent._id"
         :class="subconent.name"> {{ subconent.title }}
    </div>
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

  .html {
    @include subcontent(#ae7a5a);
  }

  .git {
    @include subcontent(#869495);
  }

  .pinia {
    @include subcontent(#779853);
  }

  .webpack {
    @include subcontent(#538b98);
  }

  .vite {
    @include subcontent(#574a8c);
  }

  .router {
    @include subcontent(#359852);
  }

  .scss {
    @include subcontent(#87394d);
  }

  .typescript {
    @include subcontent(#988c3c);
  }

  .sanity {
    @include subcontent(#8f4f4f);
  }

  .nodejs {
    @include subcontent(#588f4f);
  }

  .react {
    @include subcontent(#646a63);
  }

  .bootstrap {
    @include subcontent(#257e7e);
  }
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

@media only screen and (max-width: 1100px) {
  .subcontent {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  .subcontent {
    display: none;
  }
}
</style>