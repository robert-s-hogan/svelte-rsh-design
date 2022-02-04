<!-- <script>

import { onMount } from 'svelte';

    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');

	function handleOnSubmit() {
        checkRequired([name, email]);
        checkLength(name,3,15);
        checkEmail(email);
	}

    //Show input error messages
    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    }

    //show success colour
    function showSucces(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    //check email is valid
    function checkEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(input.value.trim())) {
            showSucces(input)
        }else {
            showError(input,'Email is not invalid');
        }
    }

    //checkRequired fields
    function checkRequired(inputArr) {
        inputArr.forEach(function(input){
            if(input.value.trim() === ''){
                showError(input,`${getFieldName(input)} is required`)
            }else {
                showSucces(input);
            }
        });
    }


    //check input Length
    function checkLength(input, min ,max) {
        if(input.value.length < min) {
            showError(input, `${getFieldName(input)} must be at least ${min} characters`);
        }else if(input.value.length > max) {
            showError(input, `${getFieldName(input)} must be les than ${max} characters`);
        }else {
            showSucces(input);
        }
    }

    //get FieldName
    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

</script> -->

<!-- on:submit={handleOnSubmit} -->

<form class="p-6 flex flex-col justify-center" action="https://submit-form.com/Mj5aEdSo">
    <div class="flex flex-col">
        <label for="name" class="hidden">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Full Name" required="" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none" />
        <!-- <span class="text-xs text-red-700" id="fullNameHelp">Please provide a name.</span> -->
    </div>

    <div class="flex flex-col mt-2">
        <label for="email" class="hidden">Email</label>
        <input type="email" id="email" name="email" placeholder="Email" required="" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none" />
        <!-- <span class="text-xs text-green-700" id="emailHelp">Please provide a real email.</span> -->
    </div>

    <div class="flex flex-col mt-2">
        <label for="message" class="hidden">Message</label>
        <textarea id="message" name="message" required="" placeholder="What would you like to start building?" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none" />
    </div>

    <button type="submit" class="md:w-32 bg-primary-900 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-blue-500 transition ease-in-out duration-300">
        Submit
    </button>
</form>