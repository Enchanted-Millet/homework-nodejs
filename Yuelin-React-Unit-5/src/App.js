import './App.css';
import {NavLink, Route} from "react-router-dom";
import News from "./pages/News";
import Photos from "./pages/Photos";

function App() {
    return (
        <div>
            <header className={'header'}>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/news"}>News</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/photos"}>Photo</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <Route path={"/news"}>
                    <News/>
                </Route>

                <Route path={"/photos"}>
                    <Photos/>
                </Route>
            </main>
        </div>
    );
}

export default App;
