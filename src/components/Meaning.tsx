import React, { useContext } from 'react'
import { Field, Label, TextArea, Button } from '@exivity/ui'

import { TypeSelect } from './TypeSelect'

import { MeaningData, MeaningsContext } from '../MeaningContext'

interface MeaningProps extends MeaningData {
  index: number
}

export function Meaning({ meaning, types, index }: MeaningProps) {
  const { deleteMeaning } = useContext(MeaningsContext)
  
  return (
    <Field.Container>
      <Field>
        <Label>types</Label>
        <TypeSelect/>
      </Field>
      <Field>
        <Label>meaning</Label>
        <TextArea/>
      </Field>
      <Field>
        <Button danger onClick={() => deleteMeaning(index)}>Delete</Button>
      </Field>
    </Field.Container>
  )
}