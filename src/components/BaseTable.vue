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

<style lang="postcss">
table {
  @apply border-collapse mx-6 text-sm font-sans shadow-lg bg-gray-700 p-10;
}

tr th {
  @apply text-left;
}

thead tr {
  @apply text-white text-left;
}

th,
td {
  @apply py-3 px-4 text-gray-100;
}

tbody tr {
  border-bottom: 1px solid #ddd;
}

tbody tr:nth-of-type(even) {
  @apply bg-gray-600;
}

td > * {
  @apply ml-3;
}
</style>
