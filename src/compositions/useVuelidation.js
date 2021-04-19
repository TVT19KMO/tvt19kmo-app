import { useVuelidate } from '@vuelidate/core';
import _get from 'lodash/get';
import _capitalize from 'lodash/capitalize';
import _last from 'lodash/last';
import _startCase from 'lodash/startCase';
import { ref } from 'vue';

/**
 * Simple wrapper for common Vuelidate operations.
 * Used this in combination with composition API.
 */
export const useVuelidation = () => {
  const v$ = useVuelidate();

  /**
   * Is the form being currently submitted.
   */
  const isSubmitting = ref(false);

  /**
   * Returns true if the given field is valid.
   * @param {String} field Name of the field.
   * @returns {Boolean} True if the field is valid.
   */
  const isValid = (field) => !_get(v$.value, field).$invalid;

  /**
   * Utility function to get the error message for the given field.
   * @param {String} field Name of te field.
   * @returns {String?} Error message for the given field.
   */
  const getErrorMessage = (field) => {
    const validation = _get(v$.value, field);
    // Check if the field has an error.
    if (!isValid(field) && validation.$errors.length)
      return validation.$errors[0].$message.replace(
        'Value',
        _capitalize(_startCase(_last(field.split('.')))),
      );

    // By default return no error message.
    return '';
  };

  /**
   *
   * @param {*} callback
   * @param {*} errorHandler
   */
  const submitForm = async (callback, errorHandler) => {
    v$.value.$touch();

    if (v$.value.$error) return;
    isSubmitting.value = true;

    try {
      await callback();
    } catch (error) {
      if (errorHandler) errorHandler(error);
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    submitForm,
    isSubmitting,
    isValid,
    getErrorMessage,
    v$,
  };
};

export default useVuelidation;
