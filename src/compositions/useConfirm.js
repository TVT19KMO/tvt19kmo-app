import { useConfirm as usePrimeConfirm } from 'primevue/useconfirm';

export const useConfirm = () => {
  const confirm = usePrimeConfirm();

  return {
    confirm: (message, accept) =>
      confirm.require({
        message,
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept,
      }),
  };
};

export default useConfirm;
