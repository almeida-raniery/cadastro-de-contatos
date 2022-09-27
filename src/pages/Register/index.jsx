import { Link } from "react-router-dom";
import RegisterForm from "../../components/Forms/Register Form";

function RegisterPage() {
    return(
        <div>
            <RegisterForm/>
            <Link to="/login">Fazer Login</Link>
        </div>
    )
}

export default RegisterPage