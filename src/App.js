import React, { useState } from 'react'
// import Format from './components/setup'

const App = () => {
  const [hue, setHue] = useState(360)
  const [saturation, setSaturation] = useState(3)
  const [lightness, setLightness] = useState(5)

  const changeHue = eventData => {
    if (eventData) {
      setHue(hue + 1)
    }
  }

  const changeSaturation = eventData => {
    if (eventData) {
      setSaturation(saturation + 1)
    }
  }
  const changeLightness = eventData => {
    if (eventData) {
      setLightness(lightness + 1)
    }
  }
  // const randomColor = eventData => {
  //   if (eventData) {
  //     setHue(Math.floor(Math.random() * 360))
  //     setLightness(Math.floor(Math.random() * 100))
  //     setSaturation(Math.floor(Math.random() * 100))
  //   }
  // }
  const divStyle = {
    backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}% )`,
  }
  return (
    <>
      <div style={divStyle} class="colorBox"></div>

      <section class="colorSliderWrap">
        <span>Hue</span>
        <input
          type="range"
          defaultValue={hue}
          onChange={eventData => changeHue(eventData.target.value)}
        />
        <span>Saturation</span>
        <input
          type="range"
          defaultValue={saturation}
          onChange={eventData => changeSaturation(eventData.target.value)}
        />
        <span>Lightness</span>
        <input
          type="range"
          defaultValue={lightness}
          onChange={eventData => changeLightness(eventData.target.value)}
        />
      </section>
      <section>
        <input type="text" {...hue} />
        <input type="text" {...saturation} />
        <input type="text" {...lightness} />
      </section>

      {/* <button onClick={eventData => randomColor(event.target.value)}>
        Change Color
      </button> */}
    </>
  )
}

export default App
