<!-- Код для глитч-эффекта взят отсюда: https://habr.com/ru/articles/533252/ -->
<template>
  <div
    class="container"
    @click="emit('eventClicked', event!.id)"
  >
    <div
      class="img"
      :style="{ backgroundImage: `url(${event?.logo.url})` }"
    />
    <div
      class="glitch"
      :style="{ backgroundImage: `url(${event?.logo.url})` }"
    />
  </div>
</template>

<script setup lang="ts">
import type { EventModel } from '@/components/pages/home/model/all_data';

defineProps<{
  tooltipLocation: 'top' | 'bottom' | 'start' | 'end';
  event: EventModel | undefined;
}>();

const emit = defineEmits<{
  eventClicked: [id: number];
}>();
</script>

<style scoped>
.img, .glitch {
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  aspect-ratio: 1 / 1;
  transform: scale(0.9); /* Уменьшаем на 20% по умолчанию */
  transition: transform 0.3s ease; /* Плавное увеличение при наведении */
}

.glitch {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0; /* По умолчанию невидим */
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
}

.container:hover .img,
.container:hover .glitch {
  transform: scale(1); /* Полный размер при наведении */
}

.container:hover .glitch {
  opacity: 1; /* Показываем глитч-эффект при наведении */
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-name: glitch-anim;
  animation-direction: alternate;
}

@keyframes glitch-anim {
  0% {
    opacity:1;
   transform:translateZ(0);
   clip-path:polygon(0 2%,100% 2%,100% 5%,0 5%)
  }
  2% {
   clip-path:polygon(0 78%,100% 78%,100% 100%,0 100%);
    transform:translate(-5px)
  }
  6% {
    clip-path:polygon(0 78%,100% 78%,100% 100%,0 100%);
    transform:translate(5px)
  }
  8% {
    clip-path:polygon(0 78%,100% 78%,100% 100%,0 100%);
    transform:translate(-5px)
  }
  9% {
    clip-path:polygon(0 78%,100% 78%,100% 100%,0 100%);
    transform:translate(0)
  }
  10% {
    clip-path:polygon(0 54%,100% 54%,100% 44%,0 44%);
    transform:translate3d(5px,0,0)
  }
  13% {
    clip-path:polygon(0 54%,100% 54%,100% 44%,0 44%);
    transform:translateZ(0)
  }
  13.1% {
    clip-path:polygon(0 0,0 0,0 0,0 0);
    transform:translate3d(5px,0,0)
  }
  15% {
    clip-path:polygon(0 60%,100% 60%,100% 40%,0 40%);
    transform:translate3d(5px,0,0)
  }
  20% {
    clip-path:polygon(0 60%,100% 60%,100% 40%,0 40%);
    transform:translate3d(-5px,0,0)
  }
  20.1% {
    clip-path:polygon(0 0,0 0,0 0,0 0);
    transform:translate3d(5px,0,0)
  }
  25% {
    clip-path:polygon(0 85%,100% 85%,100% 40%,0 40%);
    transform:translate3d(5px,0,0)
  }
  30% {
    clip-path:polygon(0 85%,100% 85%,100% 40%,0 40%);
    transform:translate3d(-5px,0,0)
  }
  30.1% {
    clip-path:polygon(0 0,0 0,0 0,0 0)
  }
  35% {
    clip-path:polygon(0 63%,100% 63%,100% 80%,0 80%);
    transform:translate(-5px)
  }
  40% {
    clip-path:polygon(0 63%,100% 63%,100% 80%,0 80%);
    transform:translate(5px)
  }
  45% {
    clip-path:polygon(0 63%,100% 63%,100% 80%,0 80%);
    transform:translate(-5px)
  }
  50% {
    clip-path:polygon(0 63%,100% 63%,100% 80%,0 80%);
    transform:translate(0)
  }
  55% {
    clip-path:polygon(0 10%,100% 10%,100% 0,0 0);
    transform:translate3d(5px,0,0)
  }
  60% {
    clip-path:polygon(0 10%,100% 10%,100% 0,0 0);
    transform:translateZ(0);
    opacity:1
  }
  60.1% {
    clip-path:polygon(0 0,0 0,0 0,0 0);
    opacity:1
  }
  to {
    clip-path:polygon(0 0,0 0,0 0,0 0);
    opacity:1
  }
}
</style>