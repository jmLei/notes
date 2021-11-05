import React, {useState} from "react";

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

    const isPasswordLongEnough = (password:string) => {
        return (password.length < 8);
    };

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
                    Eight characters minimum
                    <span aria-label="cross mark" role="img"> ❌</span>
                </div>
                <input type="submit" value="Submit"/> 
            </form>
        </div>
    )
};

export default SignUpForm;

/**
 * <div>
                    One lowercase character
                    <span aria-label="cross mark" role="img"> ❌</span>
                </div>
                <div>
                    One uppercase character
                    <span aria-label="cross mark" role="img"> ❌</span>
                </div>
                <div>
                    One special character
                    <span aria-label="cross mark" role="img"> ❌</span>
                </div>
                <div>
                    One number
                    <span aria-label="cross mark" role="img"> ❌</span>
                </div>
                <div>
                    <span aria-label="check mark" role="img">✔</span>
                </div>
 * 
 */