import Following from "~/pages/Following"
import Home from "~/pages/Home"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"
import HeaderOnly from "~/layouts/HeaderOnly"
import Search from "~/pages/Search"


import config from '~/Routes/config'


// no login
const publicRoutes = [
   { path: config.routes.home, component: Home },
   { path: config.routes.following, component: Following },
   { path: config.routes.profile, component: Profile },
   { path: config.routes.upload, component: Upload, layout: HeaderOnly },
   { path: config.routes.search, component: Search, layout: null }
]
//login  
const privateRoutes = [
]

export { publicRoutes, privateRoutes }