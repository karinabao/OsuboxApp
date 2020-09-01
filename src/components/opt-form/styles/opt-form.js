import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 20px;
    flex-wrap: wrap;
    
    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    border: 0;
    padding: 10px;
    height: 70px;
    box-sizing: border-box;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 70px;
    background: #F4D242;
    color: white;
    text-transform: uppercase;
    padding: 0 32px;
    font-size: 26px;
    border: 0;
    cursor: pointer;
   
    
    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 24px;
        
        @media (max-width: 1000px) {
            width: 16px;
        }
    }

    &:hover {
        background: #d6b93c;
    }
    
    @media (max-width: 1000px) {
        height: 50px;
        font-size: 16px;
        margin-top: 20px;
        font-weight: bold;
    }
       
    &:disabled {
        opacity: 0.6;
    }
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;

export const Text = styled.p`
    font-size: 19px;
    color: white;
    text-align: center;
    
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

export const Error = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
`;

export const BottomBase = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
    
`;