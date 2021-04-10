<template>
  <teleport to="body">
    <transition name="modal">
      <div class="modal-mask" @click.self="$emit('close')">
        <div class="modal-wrapper" v-bind="$attrs">
          <div class="modal-container">
            <!-- HEADER SECTION -->
            <div v-if="$slots.header" class="modal-header">
              <slot name="header"> default header </slot>
            </div>

            <!-- DEFAULT/BODY SECTION -->
            <div v-if="$slots.default" class="modal-body">
              <slot name="default"> default body </slot>
            </div>

            <!-- FOOTER SECTION -->
            <div v-if="$slots.footer" class="modal-footer">
              <slot name="footer">
                default footer
                <button class="modal-default-button" @click="$emit('close')">OK</button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: 'BaseModal',
  emits: ['close'],
  inheritAttrs: false,
};
</script>

<style scoped lang="postcss">
.modal-mask {
  @apply w-screen h-screen flex justify-center items-center fixed z-50 top-0 left-0 bg-opacity-50 bg-dark;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  @apply inline-block mx-auto;
}

.modal-container {
  margin: 0px auto;
  padding: 20px 30px;
  @apply bg-dark;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
