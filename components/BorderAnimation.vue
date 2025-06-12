<template>
  <div class="border-container">
    <div class="border border-top"></div>
    <div class="border border-bottom"></div>
    <div class="border border-left"></div>
    <div class="border border-right"></div>
  </div>
</template>

<style lang="scss" scoped>
.border-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none; // Pour ne pas bloquer les interactions
}

.border {
  position: absolute;
  background: $accent-color;
  transform: scale(0);
  transition: $transition;
}

.border-top,
.border-bottom {
  height: 3px;
  width: 100%;
  left: 0;
}

.border-top {
  top: 0;
  transform-origin: left;
  transition-delay: 0s;
}

.border-bottom {
  bottom: 0;
  transform-origin: right;
  transition-delay: 0.1s;
}

.border-left,
.border-right {
  width: 3px;
  height: 100%;
  top: 0;
  transform: scaleY(0);
}

.border-left {
  left: 0;
  transform-origin: top;
  transition-delay: 0.2s;
}

.border-right {
  right: 0;
  transform-origin: bottom;
  transition-delay: 0.3s;
}
</style>