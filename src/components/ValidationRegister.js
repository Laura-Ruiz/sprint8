import { emailPattern, passwordPattern } from "../regularExpressions"

export default function Validate(props) {

    let errors = {}
    if (props.firstName === "") {
        errors.firstName = "Required"
    }
    if (props.lastName === "") {
        errors.lastName = "Required"
    }

    if (!emailPattern.test(props.email)) {
        errors.email = "Email is invalid."
    }

    if (props.password.length < 6 || !passwordPattern.test(props.password)) {
        errors.password = "Password must contain at least six characters, one letter, one number and one special character."
    }

    return errors
}
