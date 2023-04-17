// Style your components here
import styled from 'styled-components'

export const MainBgContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

export const ItemsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 98%;

  @media screen and (min-width: 768px) {
    width: 90%;
  }
`

export const MainHeading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 26px;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const ItemsInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const InputElementsCard = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  order: 1;

  @media screen and (min-width: 768px) {
    width: 45%;
    margin-right: 20px;
    margin-top: 0px;
    order: 0;
  }
`

export const SpecifiedInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const InputElementLabel = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-size: 16px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const InputElement = styled.input`
  outline: none;
  background-color: transparent;
  border: 2px solid #d7dfe9;
  width: 100%;
  min-width: 150px;
  height: 40px;
  border-radius: 7px;
  margin-top: 5px;
  font-size: 16px;
  padding: 5px;
`

export const SelectElement = styled.select`
  outline: none;
  background-color: transparent;
  border: 2px solid #d7dfe9;
  width: 100%;
  min-width: 150px;
  height: 40px;
  border-radius: 7px;
  margin-top: 5px;
  font-size: 16px;
  padding: 5px;
  cursor: pointer;
`

export const OptionsElement = styled.option`
  color: #1e293b;
  font-size: 16px;
  font-family: 'Open Sans';
  margin-bottom: 10px;
`

export const GenerateButton = styled.button`
  background-color: #0b69ff;
  border: none;
  border-radius: 5px;
  width: 180px;
  height: 40px;
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  margin-top: 15px;
`

export const MemeCard = styled.div`
  background-image: url(${props => props.url});
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  min-width: 150px;
  background-size: cover;

  @media screen and (min-width: 768px) {
    width: 45%;
  }
`

export const MemeTopText = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: ${props => props.fontSize}px;
  font-weight: 500;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.fontSize}px;
  }
`
