import Admin from './pages/Admin';
import { ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, RENT_ROUTE, ROOM_ROUTE } from './utils/consts';
import Auth from './pages/Auth';
import Rent from './pages/Rent';
import Home from './pages/Home';
import RoomPage from './pages/RoomPage';

export const authRoutes =  [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    // {
    //     path: RENT_ROUTE,
    //     Component: Rent
    // },
    // {
    //     path: HOME_ROUTE,
    //     Component: Home
    // },
    {
        path: ROOM_ROUTE + '/:id',
        Component: RoomPage
    },
]