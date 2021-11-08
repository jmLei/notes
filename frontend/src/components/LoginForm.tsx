import React, {useState} from "react";

const LoginForm = () => {
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
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email"
                        onChange={onEmailChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password"
                        onChange={onPasswordChange}
                    />
                </div>
                <div>
                    <a href="#">Forgot password?</a>
                </div>
                <div>
                    <a href="#">Need an account?</a>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default LoginForm;