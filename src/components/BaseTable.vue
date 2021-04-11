<template>
  <table>
    <caption v-if="$slots.caption">
      <slot name="caption"></slot>
    </caption>
    <thead v-if="$slots.head">
      <tr>
        <slot name="head"></slot>
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
    <tfoot v-if="$slots.foot">
      <tr>
        <slot name="foot"></slot>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: 'BaseTable',
};
</script>
