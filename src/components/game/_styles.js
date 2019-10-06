export const stylesGame = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  rootPrompt: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    paddingRight: theme.spacing(6),
  },
});
