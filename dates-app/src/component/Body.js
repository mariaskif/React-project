import React from 'react'
import {Row,Col}from 'react-bootstrap'


const Body = ({persons}) => {
  return (
<Row className="justify-content-center">
  <Col sm={8}>
    <div className="rectangel">
      {persons.length ?(persons.map((item)=>{
        return( 
          
        <div key={item.id} className="d-flex p-2 border-bottom">
        <img className="images" src="2189760800_15_10_1.jpg" alt="no image"/>
        <div className="px-6">
          <p className="fs-35">{item.name}</p>
          <p> {item.date}</p>
          </div>
        </div>

      )
      })):<h2>no dates</h2>}
   
      </div>
  </Col>
  </Row>
  )
}

export default Body
