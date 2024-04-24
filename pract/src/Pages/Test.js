import React, { useState } from "react";
import './SignInAndSignUp.css';

function Test() {
    const PasswordValidator = () => {
        const [password, setPassword] = useState('');
        const [validations, setValidations] = useState({
            length: false,
            lowercase: false,
            uppercase: false,
            special: false,
            number: false
        });

        const handlePasswordChange = (event) => {
            const newPassword = event.target.value;
            setPassword(newPassword);
            validatePassword(newPassword);
        };

        const validatePassword = (password) => {
            const updatedValidations = {
                length: password.length >= 8,
                lowercase: /[a-z]/.test(password),
                uppercase: /[A-Z]/.test(password),
                special: /[^A-Za-z0-9]/.test(password),
                number: /[0-9]/.test(password)
            };
            setValidations(updatedValidations);
        }

        return (
            <>
           
            
                <input
                    type="password"
                    placeholder="Password"
                    name="Password"
                    id="Password"
                    className={validations.length && validations.lowercase && validations.uppercase && validations.special ? "valid" : "input-field"}
                    value={password}
                    onChange={handlePasswordChange} />
                <ul className="helper-text">
                    <li className={validations.length ? "valid" : ""}>Must be at least 8 characters long.</li>
                    <li className={validations.lowercase ? "valid" : ""}>Must contain a lowercase letter.</li>
                    <li className={validations.uppercase ? "valid" : ""}>Must contain an uppercase letter.</li>
                    <li className={validations.special ? "valid" : ""}>Must contain a special character.</li>
                    <li className={validations.number ? "valid" : ""}>Must contain a number.</li>
                </ul>
            </>
            
        );
    }

    return <PasswordValidator />;
}

export default Test;
