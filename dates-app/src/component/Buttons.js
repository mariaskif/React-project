import React from 'react'
import {Row,Col,Button} from 'react-bootstrap'

const Buttons = ({ondelete,onshow}) => {
  return (
 
    <Row className="justify-content-center">
    <Col sm={8} className="d-flex justify-content-between " >
      <Button onClick={ondelete} className="btn btn-primary my-2">مسح الكل</Button>
      <Button onClick={onshow}  className="btn btn-primary my-2"> عرض البيانات</Button>
    </Col>
    </Row>
    
  )
}

export default Buttons