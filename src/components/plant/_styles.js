export const stylesPlant = theme => ({
  content: {
    width: '100%',
    height: '100vh',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  rootButton: {
    display: 'flex',
  },
  rootPlant: {
    height: '100%',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'flex-end',
    paddingBottom: theme.spacing(20),
  },
  button: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
  plant: {
    flexGrow: 1,
  },
});
