import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from '../RestOp/RestOp';
import RestReview from '../RestReview/RestReview';








function View() {
//to hold particular restaurent details
const [RestDetails,setRestDetails]=useState([])

  //get particular id from the restaurent
  // const  pathParameter = useParams()
  // console.log(pathParameter.id);

//destructing
  const {id} = useParams()
  console.log(id);

  //api call for fetch particular restaurent details
  const fetchData=async()=>{
    const {data} = await axios.get(`http://localhost:3001/restaurants/${id}`)
    console.log(data);
    setRestDetails(data)
  }
console.log(id);
  //function call
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
    <Row>
      <Col sm={12} md={3}>
      {/* image */}
       <Image className='rounded boarder m-3 showdow' src={RestDetails.photograph} fluid/>
      </Col>
      <Col>
      {/* content */}
      <h1 className='text-center m-4'>{RestDetails.name}</h1>
      <ListGroup>
      <ListGroup.Item>Neighbourhood{RestDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cusinine:{RestDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address:{RestDetails.address}</ListGroup.Item>
      <ListGroup.Item><RestOp op={RestDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><RestReview re={RestDetails.reviews}/></ListGroup.Item>
    </ListGroup>
      </Col>

    </Row>
    </>
  )
}

export default View