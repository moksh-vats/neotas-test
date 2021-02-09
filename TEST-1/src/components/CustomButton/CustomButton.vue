<template>
  <button class="customButton" @click="$emit('handleButton')">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    buttonText: String,
  },
};
</script>

<style lang="scss" scoped>
button[class="customButton"] {
  font-family: $primaryFontFamily;
  min-width: 12.5em;
  margin-top: 1em;
  text-align: center;
  border: 1px solid transparent;
  padding: 0.6em;
  font-size: 1em;
  font-weight: 600;
  line-height: 1.5;
  border-radius: 0.25em;
  color: #000000;
  background-color: #ffb300;
  border-color: #ffb300;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
}
</style>
