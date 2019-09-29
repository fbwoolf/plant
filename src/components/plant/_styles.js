export const stylesPlant = theme => ({
  content: {
    width: '100%',
    height: '100vh',
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  rootControls: {
    display: 'flex',
  },
  rootPrompt: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
    paddingRight: theme.spacing(6),
  },
  rootPlant: {
    height: '100%',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'flex-end',
    paddingBottom: theme.spacing(18),
  },
  button: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
  plant: {
    flexGrow: 1,
  },
});
