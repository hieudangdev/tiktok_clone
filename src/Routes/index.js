import Following from "~/pages/Following"
import Home from "~/pages/Home"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"
import HeaderOnly from "~/Components/Layout/HeaderOnly"
import Search from "~/pages/Search"
import routesConfig from '~/config/routes'


// no login
const publicRoutes = [
   { path: routesConfig.home, component: Home },
   { path: routesConfig.following, component: Following },
   { path: routesConfig.profile, component: Profile },
   { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
   { path: routesConfig.search, component: Search, layout: null }
]
//login  
const privateRoutes = [
]

export { publicRoutes, privateRoutes }