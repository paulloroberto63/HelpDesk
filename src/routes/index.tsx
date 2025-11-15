import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./auth-routes";
import { ClientRoutes } from "./ClientRoutes";

export function Routes() {
    return (
        <BrowserRouter>
         <ClientRoutes />
        </BrowserRouter>
    )
}