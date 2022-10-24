import Following from "~/pages/Following"
import Home from "~/pages/Home/Home"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"
import HeaderOnly from "~/layouts/HeaderOnly"
import Search from "~/pages/Search"
import Live from "~/pages/Live"


import config from '~/Routes/config'


// no login
const publicRoutes = [
   { path: config.routes.home, component: Home },
   { path: config.routes.following, component: Following },
   { path: config.routes.profile, component: Profile },
   { path: config.routes.upload, component: Upload, layout: HeaderOnly },
   { path: config.routes.search, component: Search, layout: null },
   { path: config.routes.live, component: Live },
]
//login  
const privateRoutes = [
]

export { publicRoutes, privateRoutes }