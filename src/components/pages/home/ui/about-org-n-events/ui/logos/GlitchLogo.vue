<!-- Код для глитч-эффекта взят отсюда: https://habr.com/ru/articles/533252/ -->
<template>
  <v-tooltip
    :location="tooltipLocation"
  >
    <template #activator="{ props }">
      <div
        v-bind="props"
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
    <div>
      <span class="text-h5">{{ event?.name }}</span>
      <rich-text :text="event?.shortDescription" />
    </div>
  </v-tooltip>
</template>

<script setup lang="ts">
import type { EventModel } from '@/components/pages/home/model/all_data';
import RichText from '@/components/pages/home/ui/common/RichText.vue';

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
}

.glitch {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.container {
  position: relative;
}

.glitch:hover {
  -webkit-animation-duration:2s;
  animation-duration:2s;
  -webkit-animation-timing-function:linear;
  animation-timing-function:linear;
  -webkit-animation-iteration-count:infinite;
  animation-iteration-count:infinite;
  -webkit-animation-name:glitch-anim;
  animation-name:glitch-anim;
  -webkit-animation-direction:alternate;
  animation-direction:alternate
}

@keyframes glitch-anim {
  0% {
    opacity:1;
   -webkit-transform:translateZ(0);
   transform:translateZ(0);
   -webkit-clip-path:polygon(0 2%,100% 2%,100% 5%,0 5%);
   clip-path:polygon(0 2%,100% 2%,100% 5%,0 5%)
  }
  2% {
   -webkit-clip-path:polygon(0 78%,100% 78%,100% 100%,0 100%);
    clip-path:polygon(0 78%,100% 78%,100% 100%,0 100%);
    -webkit-transform:translate(-5px);
    transform:translate(-5px)
  }
  6% {
    -webkit-clip-path:polygon(0 78%,100% 78%,100% 100%,0 100%);
    clip-path:polygon(0 78%,100% 78%,100% 100%,0 100%);
    -webkit-transform:translate(5px);
    transform:translate(5px)
  }
  8% {
    -webkit-clip-path:polygon(0 78%,100% 78%,100% 100%,0 100%);
    clip-path:polygon(0 78%,100% 78%,100% 100%,0 100%);
    -webkit-transform:translate(-5px);
    transform:translate(-5px)
  }
  9% {
    -webkit-clip-path:polygon(0 78%,100% 78%,100% 100%,0 100%);
    clip-path:polygon(0 78%,100% 78%,100% 100%,0 100%);
    -webkit-transform:translate(0);
    transform:translate(0)
  }
  10% {
    -webkit-clip-path:polygon(0 54%,100% 54%,100% 44%,0 44%);
    clip-path:polygon(0 54%,100% 54%,100% 44%,0 44%);
    -webkit-transform:translate3d(5px,0,0);
    transform:translate3d(5px,0,0)
  }
  13% {
    -webkit-clip-path:polygon(0 54%,100% 54%,100% 44%,0 44%);
    clip-path:polygon(0 54%,100% 54%,100% 44%,0 44%);
    -webkit-transform:translateZ(0);
    transform:translateZ(0)
  }
  13.1% {
    -webkit-clip-path:polygon(0 0,0 0,0 0,0 0);
    clip-path:polygon(0 0,0 0,0 0,0 0);
    -webkit-transform:translate3d(5px,0,0);
    transform:translate3d(5px,0,0)
  }
  15% {
    -webkit-clip-path:polygon(0 60%,100% 60%,100% 40%,0 40%);
    clip-path:polygon(0 60%,100% 60%,100% 40%,0 40%);
    -webkit-transform:translate3d(5px,0,0);
    transform:translate3d(5px,0,0)
  }
  20% {
    -webkit-clip-path:polygon(0 60%,100% 60%,100% 40%,0 40%);
    clip-path:polygon(0 60%,100% 60%,100% 40%,0 40%);
    -webkit-transform:translate3d(-5px,0,0);
    transform:translate3d(-5px,0,0)
  }
  20.1% {
    -webkit-clip-path:polygon(0 0,0 0,0 0,0 0);
    clip-path:polygon(0 0,0 0,0 0,0 0);
    -webkit-transform:translate3d(5px,0,0);
    transform:translate3d(5px,0,0)
  }
  25% {
    -webkit-clip-path:polygon(0 85%,100% 85%,100% 40%,0 40%);
    clip-path:polygon(0 85%,100% 85%,100% 40%,0 40%);
    -webkit-transform:translate3d(5px,0,0);
    transform:translate3d(5px,0,0)
  }
  30% {
    -webkit-clip-path:polygon(0 85%,100% 85%,100% 40%,0 40%);
    clip-path:polygon(0 85%,100% 85%,100% 40%,0 40%);
    -webkit-transform:translate3d(-5px,0,0);
    transform:translate3d(-5px,0,0)
  }
  30.1% {
    -webkit-clip-path:polygon(0 0,0 0,0 0,0 0);
    clip-path:polygon(0 0,0 0,0 0,0 0)
  }
  35% {
    -webkit-clip-path:polygon(0 63%,100% 63%,100% 80%,0 80%);
    clip-path:polygon(0 63%,100% 63%,100% 80%,0 80%);
    -webkit-transform:translate(-5px);
    transform:translate(-5px)
  }
  40% {
    -webkit-clip-path:polygon(0 63%,100% 63%,100% 80%,0 80%);
    clip-path:polygon(0 63%,100% 63%,100% 80%,0 80%);
    -webkit-transform:translate(5px);
    transform:translate(5px)
  }
  45% {
    -webkit-clip-path:polygon(0 63%,100% 63%,100% 80%,0 80%);
    clip-path:polygon(0 63%,100% 63%,100% 80%,0 80%);
    -webkit-transform:translate(-5px);
    transform:translate(-5px)
  }
  50% {
    -webkit-clip-path:polygon(0 63%,100% 63%,100% 80%,0 80%);
    clip-path:polygon(0 63%,100% 63%,100% 80%,0 80%);
    -webkit-transform:translate(0);
    transform:translate(0)
  }
  55% {
    -webkit-clip-path:polygon(0 10%,100% 10%,100% 0,0 0);
    clip-path:polygon(0 10%,100% 10%,100% 0,0 0);
    -webkit-transform:translate3d(5px,0,0);
    transform:translate3d(5px,0,0)
  }
  60% {
    -webkit-clip-path:polygon(0 10%,100% 10%,100% 0,0 0);
    clip-path:polygon(0 10%,100% 10%,100% 0,0 0);
    -webkit-transform:translateZ(0);
    transform:translateZ(0);
    opacity:1
  }
  60.1% {
    -webkit-clip-path:polygon(0 0,0 0,0 0,0 0);
    clip-path:polygon(0 0,0 0,0 0,0 0);
    opacity:1
  }
  to {
    -webkit-clip-path:polygon(0 0,0 0,0 0,0 0);
    clip-path:polygon(0 0,0 0,0 0,0 0);
    opacity:1
  }
}
</style>