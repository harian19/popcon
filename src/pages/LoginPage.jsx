import AppContainer from "../components/AppContainer";
import LoginForm from "../components/LoginForm";
import { Pages } from "../Constants";

export default function LoginPage () {
    return(
        <AppContainer pageName={Pages.Login}>
            <LoginForm/>
        </AppContainer>
    )
}