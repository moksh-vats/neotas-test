<template>
  <div class="Detail">
    <div class="info">
      Fill this form with your identity.
    </div>
    <custom-input
      v-for="data in formData"
      :key="data.name"
      :data="data"
      @updateInput="handleInput"
      :ref="data.name"
    />
    <div class="info">
      The Download link will be sent to this email.
    </div>
    <custom-button buttonText="Continue" @handleButton="handleContinue" />
  </div>
</template>

<script>
import CustomButton from "../CustomButton/CustomButton.vue";
import CustomInput from "../CustomInput/CustomInput.vue";
export default {
  components: { CustomInput, CustomButton },
  name: "Detail",
  data() {
    return {
      formData: [
        {
          label: "Name",
          name: "name",
          type: "text",
          errMsg: "Name is required!",
        },
        {
          label: "Email",
          name: "email",
          type: "text",
          errMsg: "Please enter valid email!",
        },
      ],
      nameInput: "",
      nameInputErr: true,
      emailInput: "",
      emailInputErr: true,
    };
  },
  computed: {
    checkErr() {
      return !this.nameInputErr && !this.emailInputErr;
    },
  },
  methods: {
    handleContinue() {
      if (this.checkErr) {
        this.$emit("next", 1);
      } else {
        this.$refs.name[0].handleTouch();
        this.$refs.email[0].handleTouch();
      }
    },
    handleInput({ name, inputValue, error }) {
      if (name == "name") {
        this.nameInput = inputValue;
        this.nameInputErr = error;
      } else if (name == "email") {
        this.emailInput = inputValue;
        this.emailInputErr = error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
div[class="Detail"] {
  padding: 1.5em 3em;
  div[class="info"] {
    color: #c0c0c0;
    padding: 0.5em 0em;
  }
}
</style>
