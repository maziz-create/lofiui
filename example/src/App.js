import React from 'react'

import { Button } from 'lofiui'
import 'lofiui/dist/index.css'

const App = () => {
  return(
    <>
      <Button type="Primary" text="Click ME" />
      <br /><br />
      <Button text="Click ME" />
      <br /><br />
      <Button type="Secondary" text="Click ME" />
    </>
  )

}

export default App
