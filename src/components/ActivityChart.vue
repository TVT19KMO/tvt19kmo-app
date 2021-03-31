<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
export default {
  inject: ['theme'],
  data() {
    return {
      /** @type {CanvasRenderingContext2D} */
      ctx: null,
    };
  },

  computed: {
    width() {
      return this.$refs.canvas.clientWidth;
    },

    height() {
      return this.$refs.canvas.clientHeight;
    },
  },

  mounted() {
    this.ctx = this.$refs.canvas.getContext('2d');
    this.draw();
  },

  methods: {
    draw() {
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Activity', 0, 0, this.width, this.height);
    },
  },
};
</script>

<style></style>
