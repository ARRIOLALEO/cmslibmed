import React, {useRef} from 'react';
import {Form, Button, Card  } from "react-bootstrap";

export default function Signup() {
    const emailRef            = useRef();
    const passwordRef         = useRef();
    const repeatpasswordlRef  = useRef();

    return (
        <>
         <Card>
             <Card.Body>
                 <h2 className="text-center mb-4">Sign up</h2>
                 <Form>
                     <Form.Group id="email">
                         <Form.Label>Email</Form.Label>
                         <Form.Control type="email" ref={emailRef} required/>
                     </Form.Group>
                     <Form.Group id="password">
                         <Form.Label>Password</Form.Label>
                         <Form.Control type="password" ref={passwordRef} required/>
                     </Form.Group>
                     <Form.Group id="repeatPassword">
                         <Form.Label>Email</Form.Label>
                         <Form.Control type="password" ref={repeatpasswordlRef} required/>
                     </Form.Group>
                     <Button type="submit"> Sign Up</Button>
                 </Form>
             </Card.Body>
         </Card>
         <div className="w-100 text-center mt2">
             if you lost your leys call mario
             </div>  
        </>
    )
}
