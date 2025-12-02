import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { ApplicationViews } from "../views/ApplicationViews"
import { Authorized} from "../views/Authorized"
import { Register } from "../auth/Register"



export const App = () => {

    return (


        <Routes>
            <Route path="/login" element={< Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={
                <Authorized>
                    <ApplicationViews />
                </Authorized>
            } />
        </Routes>
    )
}
