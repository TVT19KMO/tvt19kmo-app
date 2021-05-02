<template>
  <PageWrapper title="Game management statistics">
    <div class="flex flex-wrap">
      <div class="max-w-sm">
        <ClipLoader v-if="isLoading" class="mx-auto" :loading="true" color="white" size="3rem" />
        <vue3-chart-js
          ref="difficultyChart"
          :id="difficultiesModel.id"
          :type="difficultiesModel.type"
          :data="difficultiesModel.data"
          :options="difficultiesModel.options"
        ></vue3-chart-js>
      </div>

      <div class="max-w-sm">
        <ClipLoader v-if="isLoading" class="mx-auto" :loading="true" color="white" size="3rem" />
        <vue3-chart-js
          ref="roomChart"
          :id="roomsModel.id"
          :type="roomsModel.type"
          :data="roomsModel.data"
          :options="roomsModel.options"
        ></vue3-chart-js>
      </div>
    </div>
  </PageWrapper>
</template>

<script>
import { getStatistics } from '@/api';
import { defineComponent, onMounted, ref } from 'vue-demi';
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';

export default defineComponent({
  name: 'StatisticsPage',

  components: {
    Vue3ChartJs,
  },

  data: () => ({
    basicData: {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
        },
      ],
    },
  }),

  watch: {},

  setup() {
    const difficultyChart = ref(null);
    const roomChart = ref(null);

    const isLoading = ref(true);

    const difficultiesModel = {
      id: 'difficulties',
      type: 'pie',
      data: {
        labels: [],
        datasets: [
          {
            backgroundColor: [],
            data: [],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Difficulties',
            color: '#fff',
            font: {
              size: '15',
              family:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              weight: 'normal',
            },
          },
          legend: {
            labels: {
              color: '#fff',
              family:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              weight: 'normal',
            },
          },
        },
      },
    };

    const roomsModel = {
      id: 'rooms',
      type: 'pie',
      data: {
        labels: [],
        datasets: [
          {
            backgroundColor: [],
            data: [],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Rooms',
            color: '#fff',
            font: {
              size: '15',
              family:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              weight: 'normal',
            },
          },
          legend: {
            labels: {
              color: '#fff',
              family:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              weight: 'normal',
            },
          },
        },
      },
    };

    onMounted(async () => {
      const {
        data: { difficulties, rooms, tasks },
      } = await getStatistics();

      difficultiesModel.data.labels = difficulties.labels;
      difficultiesModel.data.datasets = difficulties.datasets;

      roomsModel.data.labels = rooms.labels;
      roomsModel.data.datasets = rooms.datasets;

      isLoading.value = false;

      difficultyChart.value.update();
      roomChart.value.update();
    });

    return {
      difficultyChart,
      roomChart,

      difficultiesModel,
      roomsModel,

      isLoading,
    };
  },
});
</script>
