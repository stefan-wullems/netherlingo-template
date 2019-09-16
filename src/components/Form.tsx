import React, { useContext } from 'react'
import { Block, Section, Heading, Field, Label, TextArea, Button } from '@exivity/ui'

import { Meaning } from './Meaning'

import { MeaningsContext, MeaningData } from '../MeaningContext'

function renderMeanings(meanings: MeaningData[]) {
  return meanings.map((meaning, i, arr) => (
    <div key={i + meaning.meaning}>
      <Meaning index={i} {...meaning}/>
      {i+1 !== arr.length && <hr/>}
    </div>
  ))
}

export function Form() {
  const { meanings, addMeaning } = useContext(MeaningsContext)

  return (
    <Block width={600} paddingTop={200} height={2000}>
      <Section>
        <Heading type='section'>Main</Heading>
          <Field.Container>
            <Field>
              <Label htmlFor='lingo'>Lingo</Label>
              <TextArea id='lingo' placeholder='Please type lingo' />
            </Field>
            <Field>
              <Label htmlFor='translation'>
                Translation
              </Label>
              <TextArea id='translation' placeholder='Please type translation here' />
              </Field>
          </Field.Container>
        </Section>
        <Section>
        <Heading type='section'>Meanings</Heading>
          {renderMeanings(meanings)}
        <Button success onClick={addMeaning}>Add meaning</Button>
      </Section>
    </Block>
  )
}