<script>
    import { goto } from '$app/navigation';
</script>

<div class="flex flex-col w-full p-5 m-3 items-center">
    <div class="border border-gray-800 px-32 py-10">
        <div class="flex flex-col justify-center">
            <p class="font-body">If you want to contact me <br> 
                bevore this site is finished, <br>
                feel free to do so at: 
            </p>

            <a href= "mailto:simon.zeitz@it-sz.com" class="font-body hover:underline">simon.zeitz@it-sz.com</a>

            <button on:click={() => goto("/")} type="button" class="my-3 text-gray-900 border font-body border-gray-800 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[2px_2px_0px_0px_#2d3748] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2.5 text-center me-2 mb-2">
                Back to Home
            </button>
        </div>
    </div>
</div>
