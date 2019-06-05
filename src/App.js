import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import StoryContainer from './components/StoryContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StoryContainer />
    </ThemeProvider>
  );
}
export default App;
