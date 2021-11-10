import NotePage from "./components/NotePage";
import './App.css';
import theme from "./components/Theme";
import {ThemeProvider} from "@material-ui/styles";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <NotePage/>
    </ThemeProvider>
  );
}

export default App;
