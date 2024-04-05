import React, { useEffect } from 'react';
import {
    MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,

} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';

export default function Navbar() {
 const {cart , totalQuantity}= useSelector((state)=>state.allcart)
 const dispatch = useDispatch()

 useEffect(()=>{
    dispatch(getCartTotal())
 },[cart])
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand><MDBIcon fab icon="amazon" id="logo" /></MDBNavbarBrand>
        <MDBBtn color='light' rippleColor='dark'>
        <Link to="/">
        All My Products
        </Link>
      </MDBBtn>
      <MDBBtn color='dark'>
      <Link to="/shoppingcart">
        Cart({totalQuantity})
        </Link>
      </MDBBtn>
      
      </MDBContainer>
    </MDBNavbar>
  );
}