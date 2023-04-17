import {Component} from 'react'
import {
  MainBgContainer,
  ItemsMainContainer,
  MainHeading,
  ItemsInnerContainer,
  InputElementsCard,
  SpecifiedInputContainer,
  InputElementLabel,
  InputElement,
  SelectElement,
  OptionsElement,
  GenerateButton,
  MemeCard,
  MemeTopText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSizeValue: fontSizesOptionsList[0].optionId,
    isSubmitted: false,
  }

  OnChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizeValue: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText, fontSizeValue} = this.state

    this.setState({
      isSubmitted: true,
      imageUrl,
      topText,
      bottomText,
      fontSizeValue,
    })
  }

  render() {
    const {
      imageUrl,
      topText,
      bottomText,
      fontSizeValue,
      isSubmitted,
    } = this.state

    const memeGenerated = () => (
      <MemeCard url={imageUrl} data-testid="meme">
        <MemeTopText fontSize={fontSizeValue}>{topText}</MemeTopText>
        <MemeTopText fontSize={fontSizeValue}>{bottomText}</MemeTopText>
      </MemeCard>
    )

    return (
      <MainBgContainer>
        <ItemsMainContainer>
          <MainHeading>Meme Generator</MainHeading>
          <ItemsInnerContainer>
            <InputElementsCard onSubmit={this.onSubmitForm}>
              <SpecifiedInputContainer>
                <InputElementLabel htmlFor="imageUrl">
                  Image URL
                </InputElementLabel>
                <InputElement
                  type="text"
                  id="imageUrl"
                  placeholder="Enter the Image URL"
                  onChange={this.OnChangeImageUrl}
                  value={imageUrl}
                />
              </SpecifiedInputContainer>
              <SpecifiedInputContainer>
                <InputElementLabel htmlFor="topText">
                  Top Text
                </InputElementLabel>
                <InputElement
                  type="text"
                  id="topText"
                  placeholder="Enter the Top Text"
                  onChange={this.onChangeTopText}
                  value={topText}
                />
              </SpecifiedInputContainer>
              <SpecifiedInputContainer>
                <InputElementLabel htmlFor="bottomText">
                  Bottom Text
                </InputElementLabel>
                <InputElement
                  type="text"
                  id="bottomText"
                  placeholder="Enter the Bottom Text"
                  onChange={this.onChangeBottomText}
                  value={bottomText}
                />
              </SpecifiedInputContainer>
              <SpecifiedInputContainer>
                <InputElementLabel htmlFor="fontSize">
                  Font Size
                </InputElementLabel>
                <SelectElement
                  value={fontSizeValue}
                  id="fontSize"
                  onChange={this.onChangeFontSize}
                >
                  {fontSizesOptionsList.map(eachSize => (
                    <OptionsElement
                      key={eachSize.optionId}
                      value={eachSize.optionId}
                    >
                      {eachSize.displayText}
                    </OptionsElement>
                  ))}
                </SelectElement>
              </SpecifiedInputContainer>
              <GenerateButton type="submit">Generate</GenerateButton>
            </InputElementsCard>
            {isSubmitted ? memeGenerated() : null}
          </ItemsInnerContainer>
        </ItemsMainContainer>
      </MainBgContainer>
    )
  }
}

export default MemeGenerator
