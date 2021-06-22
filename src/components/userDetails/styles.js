import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0;
`

export const Name = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #444;
    margin: 0;
`

export const Username = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    color: #777;
    margin: 0;
    padding: 5px;
`

export const Description = styled.p`
    width: 300px;
    height: 30px; 
    margin: 10px 0;
    font-size: 12px;
    text-align: justify;
    color: #777;
    line-height: 1.3;
    overflow: hidden;

    @media (max-width: 430px) {
        width: 250px;
    } 
`