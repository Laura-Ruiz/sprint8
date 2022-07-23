import { emailPattern } from "../regularExpressions"

export default function ValidateLogin(props) {
    let errorLogin = {}
    if (props.emailLogin === "") {
        errorLogin.emailLogin = "Required"
    } else {
        if (!emailPattern.test(props.emailLogin)) {
            errorLogin.emailLogin = "Email is invalid."
        }
    }

    if (props.passwordLogin === "") {
        errorLogin.passwordLogin = "Required"
    }
    return errorLogin
}