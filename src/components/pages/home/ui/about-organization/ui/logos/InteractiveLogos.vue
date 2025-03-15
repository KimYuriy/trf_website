<template>
  <v-row>
    <v-col
      class="ma-0 pa-0 d-flex align-end"
      cols="3"
    >
      <!--TODO: Добавить описание для EDC CQB -->
      <v-tooltip
        location="top"
        text="Описание EDC CQB"
      >
        <template #activator="{ props }">
          <v-img
            v-bind="props"
            cover
            aspect-ratio="1"
            :src="logo_edc"
          />
        </template>
      </v-tooltip>
    </v-col>
    <v-col class="ma-0 pa-0 d-flex flex-column align-center justify-center fill-height" cols="5">
      <v-col class="ma-0 pa-0 fill-height" cols="7">
        <!--TODO: Добавить описание для DV -->
        <v-tooltip
          location="end"
          text="Описание DV"
        >
          <template #activator="{ props }">
            <v-img
              v-bind="props"
              cover
              aspect-ratio="1"
              :src="logo_dv"
            />
          </template>
        </v-tooltip>
      </v-col>
      <v-col class="ma-0 pa-0 fill-height" cols="12">
        <!--TODO: Добавить описание для ZH -->
        <v-tooltip
          location="bottom"
          text="Описание ZH"
        >
          <template #activator="{ props }">
            <v-img
              v-bind="props"
              cover
              aspect-ratio="1"
              :src="logo_zh"
            />
          </template>
        </v-tooltip>
      </v-col>
    </v-col>
    <v-col
      class=" ma-0 pa-0 d-flex align-end"
      cols="3"
    >
    <!--TODO: Добавить описание для RUS -->
      <v-tooltip
        location="top"
        text="Описание РпЯ"
      >
        <template #activator="{ props }">
          <v-img
            v-bind="props"
            cover
            aspect-ratio="1"
            :src="logo_rus"
          />
        </template>
      </v-tooltip>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
interface ILogos {
  logo_zh: string;
  logo_edc: string;
  logo_dv: string;
  logo_rus: string;
}

defineProps<ILogos>();

const emit = defineEmits<{
  eventClicked: [id: string]
}>();
</script>