<template>
  <div class="custom-select" @click="toggleDropdown">
    <div class="selected-option">{{ selectedOption }}</div>
    <transition name="dropdown-fade">
      <div v-if="isDropdownOpen" class="dropdown">
        <div class="options-container">
          <div  v-for="(option, index) in options" :key="index" class="option" @click="selectOption(index)">
            {{ option }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
const isDropdownOpen = ref(false);
const selectedOption = ref('Select an option');
const options = ref(['Option 1', 'Option 2', 'Option 3']);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectOption = (index: number) => {
  selectedOption.value = options.value[index];
  isDropdownOpen.value = false;
};
</script>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.3s ease;
}

.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
}

.dropdown {
  background-color: #f9f9f9;
}

.options-container {
  max-height: 200px;
  overflow-y: auto;
}

.option {
  padding: 10px;
  cursor: pointer;
}

.option:hover {
  background-color: #ddd;
}
</style>