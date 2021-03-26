import React, {useRef,useState} from 'react';
import {Form, Button, Card , Alert } from "react-bootstrap";
import {useAuth, currentUser} from "../contexts/AuthContext"

export default function Signup() {
    const emailRef            = useRef();
    const passwordRef         = useRef();
    const repeatpasswordlRef  = useRef();
    const { signup  } = useAuth();
        const { currentUser} = useAuth;
    const [error, setError] = useState('')
    const [loading , setLoading] = useState(false)
    async function handleSubmit(e){
        e.preventDefault();
        if(passwordRef.current.ref !== repeatpasswordlRef.current.value){
            return setError('passwords do not mach')
        }
        try{
            setError('')
            setLoading(true)
          await  signup(emailRef.current.value , passwordRef.current.value);
        }catch{
            setError(' error on sigup')
        }
        loading(false)
    }
    return (
        <>
         <Card>
             <Card.Body>
                 <h2 className="text-center mb-4">Sign up</h2>
                 {currentUser && currentUser.email}
                 {error && <Alert variant="danger">{`${error}`}</Alert>}
                 <Form onSubmit={handleSubmit}>
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
                     <Button type="submit" disabled={loading}> Sign Up</Button>
                 </Form>
             </Card.Body>
         </Card>
         <div className="w-100 text-center mt2">
             if you lost your leys call mario
             </div>  
        </>
    )
}
