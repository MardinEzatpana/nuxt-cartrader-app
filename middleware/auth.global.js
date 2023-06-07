export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.includes("view")) {
    const user = useSupabaseUser();
    if (user.value) {
      return;
    }
    return navigateTo("/login");
  }
});
