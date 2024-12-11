<script>

	import { goto } from "$app/navigation";

</script>
<div class="flex flex-col w-full p-5 m-3 items-center">
    <div class="border border-gray-800 px-32 py-10">
        <p class="text-center mb-4 font-body text-xl">Hi, I'm</p>
        <h1 class="text-9xl my-4 font-title">Simon Zeitz</h1>
        <p class="text-center mb-4 font-body text-xl">and I Design and Code</p>
        <div class="flex flex-col justify-center">
            <button on:click={() => goto("/vita")} type="button" class="text-gray-900 border font-body border-gray-800 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[2px_2px_0px_0px_#2d3748] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2.5 text-center me-2 mb-2">
                Vita
            </button>
            <button on:click={() => goto("/showcase")} type="button" class="text-gray-900 border font-body border-gray-800 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[2px_2px_0px_0px_#2d3748] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2.5 text-center me-2 mb-2">
                Showcase
            </button>
            <button on:click={() => goto("/contact")} type="button" class="text-gray-900 border font-body border-gray-800 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[2px_2px_0px_0px_#2d3748] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2.5 text-center me-2 mb-2">
                Contact
            </button>
        </div>
    </div>
</div>