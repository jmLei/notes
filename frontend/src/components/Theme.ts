import {createTheme} from "@material-ui/core/styles";

const green = "#7aa1a5";
const white = "#FFFFFF";

export default createTheme({
    palette: {
        primary: {
            main: `${green}`
        },
        secondary: {
            main: `${white}`
        }
    }
});

