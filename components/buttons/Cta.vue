<script setup>
const props = defineProps ({
    to: {
        type: [String, Object],
        required: true
    }
});
const handleClick = async () => {
  if (typeof props.to === 'string' && props.to.includes('#')) {
    const [path, hash] = props.to.split('#');
    
    // Si on est déjà sur la bonne page, juste scroller
    if (useRoute().path === path) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    
    // Sinon, naviguer puis scroller
    await navigateTo(path);
    
    // Attendre plusieurs cycles pour être sûr que la page est chargée
    await nextTick();
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
// const handleClick = async () => {
//   if (typeof props.to === 'string' && props.to.includes('#')) {
//     const [path, hash] = props.to.split('#');
//     await navigateTo(path);
    
//     // Attendre que la page soit chargée puis scroller
//     await nextTick();
//     const element = document.getElementById(hash);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   } else {
//     await navigateTo(props.to);
//   }
// };
</script>
<template>
    <button class="button">
        <NuxtLink class="button__link" :to="to" @click="handleClick"><slot></slot></NuxtLink>
    </button>
    <!-- <button class="button" @click="handleClick">
        <span class="button__link">
            <slot></slot>
        </span>
    </button> -->
</template>
<style lang="scss" scoped>
.button {
    @include button-cta ($padding-button);
    @include responsive-tablette {
        @include button-cta ($padding-button-tablette);
    }
    @include responsive-mobile {
        @include button-cta ($padding-button-mobile);
    }
    &__link {
        text-decoration: none;
        color: $white;
    }
}</style>