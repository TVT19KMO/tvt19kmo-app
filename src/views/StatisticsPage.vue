<template>
  <PageWrapper title="Game management statistics">
    <BaseInput
      :feedback="false"
      id="child"
      kind="dropdown"
      :options="childOptions"
      optionValue="id"
      v-model="child"
      optionLabel="name"
      placeholder="Select a child whose statistics you want to check"
    />

    <div class="flex flex-col md:flex-row w-full items-center">
      <div class="w-64 max-w-lg flex flex-col justify-center space-y-3">
        <Card class="w-56">
          <template #title> Coins </template>

          <template #content>
            <div class="flex flex-col space-y-3">
              <p>Spent: {{ coins.used }}</p>
              <p>Transferred: {{ coins.transferred }}</p>
            </div>
          </template>
        </Card>

        <Card class="w-56">
          <template #title>Tasks</template>

          <template #content>
            <div class="flex flex-col space-y-3">
              <p>Assigned: {{ tasks.inProgress + tasks.finished }}</p>
              <p>Completed: {{ tasks.finished }}</p>
              <p>In progress: {{ tasks.inProgress }}</p>
            </div>
          </template>
        </Card>
      </div>

      <div class="inline-flex flex-row flex-wrap justify-center">
        <div class="max-w-sm">
          <ClipLoader
            v-if="isLoading"
            class="mx-auto p-5"
            :loading="true"
            color="white"
            size="3rem"
          />
          <vue3-chart-js
            ref="difficultyChart"
            :id="difficultiesModel.id"
            :type="difficultiesModel.type"
            :data="difficultiesModel.data"
            :options="difficultiesModel.options"
          ></vue3-chart-js>
        </div>

        <div class="max-w-sm">
          <ClipLoader
            v-if="isLoading"
            class="mx-auto p-5"
            :loading="true"
            color="white"
            size="3rem"
          />
          <vue3-chart-js
            ref="roomChart"
            :id="roomsModel.id"
            :type="roomsModel.type"
            :data="roomsModel.data"
            :options="roomsModel.options"
          ></vue3-chart-js>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>

<script>
import { getStatistics, getStatisticsForChild } from '@/api';
import { defineComponent, onMounted, ref } from 'vue-demi';
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';
import useChildData from '@/compositions/useChildData';

export default defineComponent({
  name: 'StatisticsPage',

  data: () => ({
    child: false,
  }),

  components: {
    Vue3ChartJs,
  },

  computed: {
    childOptions: ({ children }) => [
      {
        id: false,
        name: 'All children',
      },
      ...children,
    ],
  },

  watch: {
    async child(id) {
      await this.fetchStatistics(id);
    },
  },

  setup() {
    const { children, getChildren } = useChildData();

    const difficultyChart = ref(null);
    const roomChart = ref(null);

    const coins = ref({});
    const tasks = ref({});

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

    const fetchStatistics = async (id = null) => {
      isLoading.value = true;
      let getter = null;
      if (!id) {
        getter = getStatistics;
      } else {
        getter = getStatisticsForChild;
      }
      const {
        data: { difficulties, rooms, tasks: tasks_, coins: coins_ },
      } = await getter(id);

      await getChildren();

      tasks.value = tasks_;
      coins.value = coins_;

      difficultiesModel.data.labels = difficulties.labels;
      difficultiesModel.data.datasets = difficulties.datasets;

      roomsModel.data.labels = rooms.labels;
      roomsModel.data.datasets = rooms.datasets;

      isLoading.value = false;

      difficultyChart.value.update();
      roomChart.value.update();
    };

    onMounted(async () => {
      await fetchStatistics();
    });

    return {
      children,
      fetchStatistics,

      coins,
      tasks,

      difficultyChart,
      roomChart,

      difficultiesModel,
      roomsModel,

      isLoading,
    };
  },
});
</script>
