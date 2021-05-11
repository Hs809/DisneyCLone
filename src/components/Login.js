import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogo1 src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sequi a aliquid maiores sapiente quo officia non culpa, adipisci ipsum nulla!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, quia!
                </Description>
                <CTALogo2 src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    posiiton:relative;
    height:calc(100vh-70px);
    display:flex;
    justify-content:center;
    align-items:top;

    &:before{
        position:absolute;
        content:"";
        top:0;
        bottom:0;
        left:0;
        right:0;
        background-image:url(/images/login-background.jpg);
        background-position:top;
        background-size:cover;
        background-repeat:no-repeat;
        z-index:-1;
        opacity:0.7;


    }
`
const CTA = styled.div`
    max-width:650px;
    padding:80px 40px;
    width:70%;
    display:flex;
    flex-direction:column;
    align-items:center;

`
const CTALogo1 = styled.img``

const SignUp = styled.a`
    width:100%;
    background:#0063e5;
    font-weight:bold;
    padding:17px 0;
    text-align:center;
    color:$f9f9f9;
    border-radius:4px;
    font-size:18px;
    cursor:pointer;
    transition:all 250ms;
    letter-spacing:1.5px;
    margin-top:8px;
    marign-bottom:12px;

    &:hover{
        background:#0483ee;

    }
`
const Description = styled.p`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`
const CTALogo2 = styled.img`
    width:90%;

`