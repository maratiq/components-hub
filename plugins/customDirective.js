export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('my-directive', {
        mounted(element, binding) {
            // Your custom directive logic here
            console.log(element)
            console.log("My directive works!", binding.value); // Output: the value passed as an argument to the directive. In this case the string 'Hello'
        }
    });
});