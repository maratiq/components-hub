export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('scroll-to-top', {
        mounted(element) {
            element.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });
});