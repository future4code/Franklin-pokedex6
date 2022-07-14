import styled from "styled-components"

export const DivImage = styled.div`
    max-width: 300px;
    min-width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.url});
    background-size: 300px 300px;
    background-repeat: no-repeat;
    background-position: center;
`