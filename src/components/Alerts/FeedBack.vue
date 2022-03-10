<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header"> {{ titleFeedBack }} </slot>
        </div>

        <div class="modal-body">
          <slot name="body"> {{ contentFeedBack }} </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="modal-default-button" @click="$emit('close')">
              Fechar
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["titleFeedBack", "contentFeedback"],
  data() {},
};
</script>
<style scoped>

</style>

