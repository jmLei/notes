import React, {useState} from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";

import "./LoginForm.css";

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const onPasswordChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const onSubmitHandler = (event:React.FormEvent<HTMLFormElement>) => {
        console.log("Email = " + email);
        console.log("Password = " + password);
        event.preventDefault();
    };

    return(
        <Card className="login_form_card">
            <h1>Sign Up</h1>
            <form onSubmit={onSubmitHandler}>
                    <div>
                        <TextField 
                            className="login_form_textfield"
                            required
                            variant="outlined" 
                            label="Email"
                            margin="normal"
                            size="small"
                            onChange={onEmailChange}
                        />
                        
                    </div>
                    <div>
                        <TextField
                            className="login_form_textfield"
                            required
                            variant="outlined"
                            type="password"
                            label="Password"
                            margin="normal"
                            size="small"
                            onChange={onPasswordChange}
                        />
                    </div>
                    <Button 
                        variant="contained"
                        className="login_form_button"
                    >
                        Sign Up
                    </Button>
                </form>
                <br/>
        </Card>
    )
};

export default SignUpForm;