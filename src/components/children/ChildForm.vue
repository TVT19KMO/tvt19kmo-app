<template>
    <Dialog
        v-bind="$attrs"
        :style="{ width: '450px' }"
        header="Task Details"
        :modal="true"
        class="p-fluid"
    >
        <template #title> Get Child </template>

        <div class="p-fluid">
        <div class="p-field">
            <label for="task-name">Child Name</label>
            <InputText
            id="task-name"
            type="text"
            v-model.trim="name"
            autofocus
            :class="{ 'p-invalid': isSubmitted && !name }"
            />
            <small class="p-error" v-if="isSubmitted && !name">Name is required.</small>
        </div>

        <div class="p-field">
            <label for="task-note">Note</label>
            <Textarea id="task-note" type="text" v-model="note" rows="5" />
        </div>

        <div class="p-field">
            <Dropdown
            v-model="room"
            optionLabel="name"
            optionValue="id"
            :options="rooms"
            placeholder="Select a room"
            :class="{ 'p-invalid': isSubmitted && !room }"
            />
            <small class="p-error" v-if="isSubmitted && !room">Room is required.</small>
        </div>

        <div class="p-field">
            <Dropdown
            v-model="difficulty"
            optionLabel="name"
            :options="difficulties"
            optionValue="id"
            placeholder="Select a difficulty"
            :class="{ 'p-invalid': isSubmitted && !difficulty }"
            >
            <template #option="{ option: difficulty }">
                <p>
                {{ difficulty.name }} <span>({{ difficulty.reward }})</span>
                </p>
            </template>
            </Dropdown>
            <small class="p-error" v-if="isSubmitted && !difficulty">Difficulty is required.</small>
        </div>
        </div>

        <template #footer>
        <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="$emit('close')" />
        <Button label="Save" icon="pi pi-check" class="p-button-text" @click="save" />
        </template>
  </Dialog>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

    },
})
</script>

<style scoped lang="postcss"></style>
