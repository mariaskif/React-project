import React from 'react'
import {Row,Col} from 'react-bootstrap'

 const Datacount = ({persons}) => {
  return (
    <Row className="justify-content-center">
    <Col sm={8} className="py-3">
  لديك {persons.length} مواعيد اليوم
    </Col>
    </Row>
  )
}

export default Datacount