import React, {useState, useContext, useHistory} from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs.json'
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';


export function FaqsContainer() {
    
    const { firebase } = useContext(FirebaseContext);
    
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [isRegistered, setIsRegistered] = useState(false)
    
    const isInvalid = emailAddress === '';    
    
    
    const handleSignup = (event) => {
        setIsRegistered(true)
        event.preventDefault();
      
        const db = firebase.firestore();
 
        const userRef = db.collection("samples").add({
            email: emailAddress
        })

        setEmailAddress("");
        setIsRegistered(false)

    };
    
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
                {faqsData.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Frame>

            
            
            <OptForm>
                {error && <OptForm.Error>{error}</OptForm.Error>}
                 <OptForm.BottomBase onSubmit={handleSignup} method="POST">

                <OptForm.Input  placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }) => 
                                setEmailAddress(target.value)
                                } />
                <OptForm.Button disabled={isInvalid}>Try it now</OptForm.Button>
                
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create, and we will be in touch.</OptForm.Text>
                </OptForm.BottomBase>
                  

            </OptForm>
        </Accordion>
    );
}