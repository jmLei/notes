import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import Toolbar from "@material-ui/core/Toolbar";

const Header = () => {
    return(
        <AppBar position="fixed">
            <Toolbar>
                <Grid container>
                    <Grid item xs={1}>
                    
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <TextField 
                                fullWidth
                                label="Search"
                                size="small"
                                variant="filled" 
                            />
                        </Card>
                        
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;