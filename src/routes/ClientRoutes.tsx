import { Routes, Route } from "react-router"

import { HelpDesk } from "../pages/HelpDesk"
import { NotFound } from "../pages/NotFound"
import { MenuLayout } from "../components/MenuLayout"
import { Details } from "../pages/details"

export function ClientRoutes() {
    return (
        <Routes>
                    <Route path="/" element={<MenuLayout />}>
                      <Route path="/" element={< HelpDesk />}/>
                      <Route path="/details" element={< Details/>}/>
                      </Route>
        
                    <Route path="*" element={<NotFound />}/>
                </Routes>
    )
}