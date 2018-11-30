<template>
  <div class="spinner-container" v-if="open" :size="size">
    <div class="spinner"></div>
    <div class="text"> {{text}} </div>
  </div>
</template>

<script>
export default {
  name: 'spinner',
  data () {
    return {
      open: true,
      text: 'loading loading loading',
      size: ''
    }
  },
  methods: {
    openSpinner (message) {
      this.text = message
      this.open = true
    },
    closeSpinner () {
      this.open = false
    }
  }
}
</script>

<style>
.spinner-container {
  width: 100%;
  height: 100%;
  align-items: center;
}

.spinner {
  width: 70px;
  height: 70px;
  border: 4px solid #eeee;
  border-top: 4px solid #4ef1af;
  border-radius: 50%;
  animation: spin 1s infinite linear;
  margin: auto;
}

.text {
  margin: auto;
  padding: 16px;
  text-align: center;
  color: #bbb;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
