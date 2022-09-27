import { Link } from "react-router-dom";
import LoginForm from "../../components/Forms/Login Form";

function LoginPage() {
    return(
        <section>
            <LoginForm/>
            <Link to="/register">Cadastre-se</Link>
        </section>
    )
}

export default LoginPage