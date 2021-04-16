<template>
    <Card>
        <template #title> Get Child </template>

        <template #content>
            <div class="p-fluid space-y-10">
                <button type="button" text="Get Child"/>

                <span class="p-field p-float-label">
                    <InputText id="task-name" type="text" v-model="task.name" />
                    <label for="task-name">Name</label>
                </span>

                <span class="p-field p-float-label">
                    <Textarea id="task-note" type="text" v-model="task.note" />
                    <label for="task-note">Note</label>
                </span>

                    <Dropdown
                      optionLabel="Child"
                      :options="Child1"
                      placeholder="Select a Child to assign to"
                    />
            </div>
        </template>
        
        <template #footer>
            <Button icon="pi pi-check" type="button" label="Assign" />
        </template>
    </Card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

    },
})
</script>

<style scoped lang="postcss"></style>
