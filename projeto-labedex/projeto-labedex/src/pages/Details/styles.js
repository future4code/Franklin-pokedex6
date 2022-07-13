import styled from 'styled-components'

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  border-radius: 10px;
  margin-top: 5%;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 30%;
  border-radius: 10px;
`
export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 30%;
  border-radius: 10px;
`

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 30%;
  border-radius: 10px;
`
export const Scroll = styled.div`
  overflow-y: scroll;
  height: 300px;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid black;
`

export const Image = styled.img`
  width: 50%;
  border-radius: 10px;
  margin: 0 auto;
`

export const DivImage = styled.div`
    max-width: 345px;
    height: 300px;
    background: ${props => props.typeColor}98;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.url});
    background-size: 300px 300px;
    background-repeat: no-repeat;
    border-bottom-left-radius: 25%;
    border-bottom-right-radius: 25%;
`
