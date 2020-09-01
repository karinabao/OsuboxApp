import React, {useState, useContext} from 'react';
import { Feature, OptForm } from '../components';
import { useHistory } from 'react-router-dom';
import { FaqsContainer } from '../containers/faqs';
import { FirebaseContext } from '../context/firebase';

import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import * as ROUTES from '../constants/routes';

export default function Home() {
    const history = useHistory();
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
        history.push(ROUTES.BROWSE);

    };

    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>The Future of Competitive Streaming
                    </Feature.Title>
                   { isRegistered ? 
                    <Feature.SubTitle>Thank you signing up, we will be in touch shortly </Feature.SubTitle>
                    : <Feature.SubTitle>Get access to our invite-only beta version of the Osubox platform. Be the first to know when we launch</Feature.SubTitle>}
                    <OptForm>    
                        {error && <OptForm.Error>{error}</OptForm.Error>}
                        <OptForm.Base onSubmit={handleSignup} method="POST">

                        <OptForm.Input 
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }) => 
                                setEmailAddress(target.value)
                                } 
                        />
                        <OptForm.Button disabled={isInvalid} >request early access</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch? Enter your email, and we will be in touch.</OptForm.Text>
                        </OptForm.Base>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
