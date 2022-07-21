import styled from 'styled-components'

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
`

export const ImageContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  grid-area: 1 / 1 / 4 / 3;
`
export const StatsContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  grid-area: 1 / 3 / 5 / 5;
`

export const SkillsContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  grid-area: 1 / 5 / 5 / 7;
`
export const Scroll = styled.div`
  margin: 40px 20px;
  overflow-y: scroll;
  height: 315px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid lightgrey;
  &::-webkit-scrollbar-thumb {
    background: red;
  }
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 5px;
  padding: 20px;
  margin-top: 10px;
`

export const StatsName = styled.p`
  font-weight: 600;
  margin-bottom: 5px;
`

export const DivTypes = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5px;
    height: 50px;
    grid-area: 4 / 1 / 5 / 3;
`

export const DivTitles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  border-bottom: solid 1px lightgrey;
  padding-bottom: 5px;
`

export const Move = styled.p`
  margin: 0;
  text-transform: capitalize;
`