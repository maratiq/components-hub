export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('focus', {
        mounted(element){
            // Your custom directive logic here
            element.focus()
        }
    });
});