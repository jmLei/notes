import React, {useState} from "react";

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordLongEnough, setIsPasswordLongEnough] = useState(false);
    const [hasLowerCaseChar, setHasLowerCaseChar] = useState(false);
    const [hasUpperCaseChar, setHasUpperCaseChar] = useState(false);
    const [hasSpecialChar, setHasSpecialChar] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);

    const onEmailChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const onPasswordChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        (event.target.value.length >= 8) ? setIsPasswordLongEnough(true) : setIsPasswordLongEnough(false);

        let regex:RegExp = new RegExp('[A-Z]');
        (regex.test(event.target.value)) ? setHasUpperCaseChar(true) : setHasUpperCaseChar(false);

        regex = new RegExp('[a-z]');
        (regex.test(event.target.value)) ? setHasLowerCaseChar(true) : setHasLowerCaseChar(false);
    
        regex = new RegExp('[1-9]');
        (regex.test(event.target.value)) ? setHasNumber(true) : setHasNumber(false);

        regex = new RegExp('^[a-zA-Z0-9]');
        (regex.test(event.target.value)) ? setHasSpecialChar(true) : setHasSpecialChar(false);
    };

    const onSubmitHandler = (event:React.FormEvent<HTMLFormElement>) => {
        console.log("Email = " + email);
        console.log("Password = " + password);
        event.preventDefault();
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
                    {
                        isPasswordLongEnough ? 
                            <span aria-label="check mark" role="img"> 👍</span> : 
                            <span aria-label="cross mark" role="img"> ❌</span>
                    }
                </div>
                <div>
                    One lower case character
                    {
                        hasLowerCaseChar ? 
                            <span aria-label="check mark" role="img"> 👍</span> : 
                            <span aria-label="cross mark" role="img"> ❌</span>
                    }
                </div>
                <div>
                    One upper case character
                    {
                        hasUpperCaseChar ? 
                            <span aria-label="check mark" role="img"> 👍</span> : 
                            <span aria-label="cross mark" role="img"> ❌</span>
                    }
                </div>
                <div>
                    One special case character
                    {
                        hasSpecialChar ? 
                            <span aria-label="check mark" role="img"> 👍</span> : 
                            <span aria-label="cross mark" role="img"> ❌</span>
                    }
                </div>
                <div>
                    One number
                    {
                        hasNumber ? 
                            <span aria-label="check mark" role="img"> 👍</span> : 
                            <span aria-label="cross mark" role="img"> ❌</span>
                    }
                </div>
                <input type="submit" value="Submit"/> 
            </form>
        </div>
    )
};

export default SignUpForm;