import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from 'components/Footer/Footer'
import MainScreen from './screens/MainScreen'
import CartScreen from './screens/CartScreen/CartScreen'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import RegistrationScreen from './screens/RegistrationScreen/RegistrationScreen'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen/OrderScreen'
import UserListScreen from './screens/UserListScreen/UserListScreen'
import UserEditScreen from './screens/UserEditScreen/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen/OrderListScreen'
import CustomThemeProvider from 'theme';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import ProductDetailSection from 'screens/ProductDetailScreen/ProductDetailScreen'
import TranslationProvider from 'contexts/translation.context'

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(error.response.data.message);
  }
)
const App = () => {
  return (
    <CustomThemeProvider>
    <ToastContainer limit={3} theme='dark'transition={Slide} />
    <TranslationProvider>
    <Router>
      <Header />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegistrationScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductDetailSection} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />

          <Route path='/' component={MainScreen} exact />
          <Footer/>
    </Router>
    </TranslationProvider>
    </CustomThemeProvider>
  )
}

export default App
