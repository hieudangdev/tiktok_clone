import Following from "~/pages/Following"
import Home from "~/pages/Home"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"
import HeaderOnly from "~/Components/Layout/HeaderOnly"


// no login
const publicRoutes = [
   { path: '/', component: Home },
   { path: '/following', component: Following },
   { path: '/@:nickname', component: Profile },
   { path: '/upload', component: Upload, layout: HeaderOnly }
]
//login  
const privateRoutes = [
]

export { publicRoutes, privateRoutes }