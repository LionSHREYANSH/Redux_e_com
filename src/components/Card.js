import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

import {useSelector , useDispatch} from "react-redux"
import {   addToCart } from '../features/cartSlice';

export default function Card() {

      const items = useSelector((state)=>state.allcart.items)

      const dispatch = useDispatch()
  return (
    <MDBContainer >
      <MDBRow className='mb-3'>

        {  items.map((item)=>(
          <MDBCol size='3' className='mt-3'>
            <MDBCard>
              <MDBCardImage src={item.img} position='top' alt='laptop' id="mycards" />
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText  >
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
                <h5>(₹){item.price}</h5>
                <MDBBtn href='#' onClick={()=>dispatch(addToCart(item))}>Add to cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))
          
        }
      </MDBRow>
    </MDBContainer>
  );
}