import React from 'react'

import { MeaningsProvider } from './MeaningContext'

import { Preview } from './components/Preview'
import { Form } from './components/Form'
import { Layout } from './components/Layout'

function App () {
  return (
    <MeaningsProvider>
      <Layout left={<Preview/>} right={<Form />}/>
    </MeaningsProvider>
  )
}

export default App
