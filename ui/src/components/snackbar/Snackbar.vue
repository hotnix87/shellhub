<template>
  <fragment>
    <snackbarSuccess
      :type-message="message.typeMessage"
      :main-content="message.typeContent"
    />
    <snackbarError
      :type-message="message.typeMessage"
      :main-content="message.typeContent"
    />
    <snackbarCopy
      :main-content="message.typeContent"
    />
  </fragment>
</template>

<script>

import snackbarSuccess from '@/components/snackbar/SnackbarSuccess';
import snackbarError from '@/components/snackbar/SnackbarError';
import snackbarCopy from '@/components/snackbar/SnackbarCopy';

export default {
  name: 'Snackbar',

  components: {
    snackbarSuccess,
    snackbarError,
    snackbarCopy,
  },

  computed: {
    message() {
      return this.$store.getters['snackbar/snackbarMessageAndContentType'];
    },
  },
};

</script>
