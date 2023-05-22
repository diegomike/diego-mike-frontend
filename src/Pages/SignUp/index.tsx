import { useNavigate } from "react-router-dom";
import AuthForm, { Auth } from "../../components/AuthForm";
import api from "../../services/api";

function SignUp() {
    const navigate = useNavigate();
    async function handleRegister(auth: Auth) {
        try {
            await api.post("/security/register", auth);
            navigate("/");
    } catch(err) {
        alert("Erro na criação do usuário");
    }
}

    return <AuthForm authFormTitle="Cadastre-se e comece a usar!"
    submitFormButtonText="Cadastrar" 
    submitFormButtonAction={handleRegister}
    routeName="/"
    />;
}

export default SignUp;