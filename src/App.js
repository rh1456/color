import React, { useState } from 'react'
// import Format from './components/setup'

const App = () => {
  const [hue, setHue] = useState(0)
  const [saturation, setSaturation] = useState(0)
  const [lightness, setLightness] = useState(0)

  const changeHue = eventData => {
    if (hue >= 0) {
      setHue(hue + 1)
    }
  }
  const changeSaturation = eventData => {
    if (saturation >= 0) {
      setSaturation(saturation + 1)
    }
  }
  const changeLightness = eventData => {
    if (lightness >= 0) {
      setLightness(lightness + 1)
    }
  }

  const divStyle = {
    backgroundColor: `hsl(${hue}, ${saturation}, ${lightness} )`,
  }
  return (
    <>
      <div style={divStyle} class="colorBox"></div>

      <section class="colorSliderWrap">
        <span>Hue</span>
        <input type="range" min={hue} max="360" onChange={changeHue} />
        <span>Saturation</span>
        <input type="range" min={hue} max="100" onChange={changeSaturation} />
        <span>Lightness</span>
        <input
          type="range"
          min={lightness}
          max="100"
          onChange={changeLightness}
        />
      </section>
    </>
  )
}

export default App
