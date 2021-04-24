import { useToast as usePrimeToast } from 'primevue/usetoast';

export const useToast = (life = 3000) => {
  const toast = usePrimeToast();

  const showError = (detail) => {
    toast.add({
      severity: 'error',
      summary: 'Error!',
      detail,
      life,
    });
  };

  const showSuccess = (detail) => {
    toast.add({
      severity: 'success',
      summary: 'Success!',
      detail,
      life,
    });
  };

  return {
    showError,
    showSuccess,
  };
};

export default useToast;
