import {Route} from "react-router-dom";
import LoginView from "./assets/Components/Views/LoginView/LoginView";
import HomeView from "./assets/Components/Views/HomeView/HomeView";

const App = (props) => {

    return (
        <div>
            <Route exact path={'/'}><HomeView /></Route>
            <Route path={'/login'} ><LoginView /></Route>
        </div>
    );
};

export default App;
