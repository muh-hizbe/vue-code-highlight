<template>
    <section class="transition duration-300 ease-in-out w-full p-10 mb-5 bg-white rounded-lg">        
        <div class="max-w-lg mx-auto p-1 flex items-center">
            <label class="flex-1 w-full appearance-none rounded p-3 pl-0 text-gray-700 uppercase font-semibold focus:outline-none">Jumlah data :</label>
        </div>
        <div class="max-w-lg mx-auto p-1 flex items-center">
            <input type="number" placeholder="0" class="flex-1 w-full appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none bg-yellow-200"/>
        </div>
        <div class="max-w-lg mx-auto p-1 flex items-center">
            <select id="twoslash" class="flex-1 w-full appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none cursor-pointer bg-blue-100">
                <option>Urut berdasarkan</option>
                <option>Missouri</option>
                <option>Texas</option>
            </select>
        </div>
        <div class="max-w-lg mx-auto p-1 flex items-center">
            <select id="twoslash" class="flex-1 w-full appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none cursor-pointer bg-blue-100">
                <option>Urutkan</option>
                <option>Missouri</option>
                <option>Texas</option>
            </select>
        </div>
        <div class="max-w-lg mx-auto p-1 flex items-center">
            <button class="flex-1 w-full appearance-none rounded shadow p-3 text-white uppercase font-semibold mr-3 focus:outline-none bg-blue-400 hover:bg-blue-500">Sebelumnya</button>
            <button class="flex-1 w-full appearance-none rounded shadow p-3 text-white uppercase font-semibold focus:outline-none bg-blue-400 hover:bg-blue-500">Selanjutnya</button>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>