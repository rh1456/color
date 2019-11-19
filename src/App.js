import React, { useState } from 'react'
// import Format from './components/setup'
const color = props => {
  const [hue, setHue] = useState(0)
  const [saturation, setSaturation] = useState(0)
  const [lightness, setLightness] = useState(0)

  const changeHue = eventData => {
    // setHue(eventData.target.value)
  }
  const changeSaturation = eventData => {}
  const changeLightness = eventData => {}
}

const divStyle = {
  backgroundColor: 'hsl(120, 100%, 50%)',
  color: 'hsl(0, 0%, 0%)',
}

const App = () => {
  return (
    <>
      <div style={divStyle} class="colorBox"></div>

      <section class="colorSliderWrap">
        <span>Hue</span>
        <input
          type="range"
          min={props.hue}
          max="360"
          onChange={changeSaturation}
        />
        <span>Saturation</span>
        <input type="range" min={props.hue} max="100" onChange={changeHue} />
        <span>Lightness</span>
        <input type="range" min={props.lightness} onChange={changeSaturation} />
      </section>
    </>
  )
}

export default App
