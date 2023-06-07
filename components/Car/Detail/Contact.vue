<script setup>
const route = useRoute();

const contactData = reactive({
    name: "",
    email: "",
    phone: "",
    message: "",
});

const handleSubmit = async () => {
    const { error, data } = await $fetch(
        `/api/car/listings/${route.params.id}/message`,
        {
            method: "post",
            body: contactData,
        }
    );

    console.log({ error, data });
};
</script>

<template>
    <div class="mt-10">
        <div class="flex w-[600px] justify-between">
            <input v-model="contactData.name" type="text" class="border p-1" placeholder="Name" />
            <input v-model="contactData.email" type="text" class="border p-1" placeholder="Email" />
            <input v-model="contactData.phone" type="text" class="border p-1" placeholder="Phone" />
        </div>
        <div class="flex mt-4 w-[600px]">
            <textarea v-model="contactData.message" class="border p-1 w-full" placeholder="Message"></textarea>
        </div>
        <button class="bg-blue-400 text-white px-10 py-3 rounded mt-4" @click="handleSubmit">
            Submit
        </button>
    </div>
</template>