import { SnackbarProvider, useSnackbar } from "notistack";

export const snackbarGenerator = (() => {
  let enqueueSnackbar;

  const SnackbarUtilsConfigurator = () => {
    enqueueSnackbar = useSnackbar().enqueueSnackbar;
    return null;
  };

  const enqueueSnackbarFunc = (message, variant = "default") => {
    enqueueSnackbar(message, { variant });
  };

  return {
    SnackbarUtilsConfigurator,
    enqueueSnackbarFunc,
  };
})();
