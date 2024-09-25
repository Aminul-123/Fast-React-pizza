import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
const Home = lazy(() => import('./ui/Home'))
import Menu, {loader as menuLoader} from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder , {action as createOrderAction} from './features/order/CreateOrder';
import Order from './features/order/Order';
import AppLayout from "./ui/AppLayout";
import Error from './ui/Error'
import { loader as orderLoader } from "./features/order/Order";
import { action as updateOrderAction } from "./features/order/UpdateOrder";


 const router = createBrowserRouter([
  {
    element : <AppLayout />,
    errorElement : <Error />,
    children : [

      {
        path : '/',
        element : <Home />
      },
      {
        path : '/menu',
        element : <Menu />,
        loader : menuLoader,
        errorElement : <Error />
      },
      {
        path : '/cart',
        element : <Cart />
      },
      { 
        path : '/order/new',
        element : <CreateOrder />,
        action : createOrderAction,
        errorElement : <Error />

      },
      {
        path : '/order/:orderId',
        element : <Order />,
        action : updateOrderAction,
        loader : orderLoader ,
        errorElement : <Error />


      },

    
   ]
  },

])

export default function App () {
  return (
   <RouterProvider router={router} />
  )
}