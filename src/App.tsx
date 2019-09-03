import React, { useState } from 'react'
import { Flex, Block, Field, Label, Select, SelectList, Checkbox, TextArea, ListItem, Widget, Section, Heading, Button } from '@exivity/ui'

const TYPES = [
  { key: 'phr.', value: 'phrase' }, 
  { key: 'exp.', value: 'expression'}
]

interface NewMeaning {
  meaning: string
  types: string[]
}

const newMeaning = {
  meaning: '',
  types: []
} as NewMeaning

function App () {

  const [meanings, setMeanings] = useState([newMeaning])

  return (
   <Flex>
     <Flex.Item width='50%'>
      <Widget width='100%' height='100vh' sticky>
        <Center><Block width={500} height={500} backgroundColor='blue'/></Center>
      </Widget>
      </Flex.Item>
      <Flex.Item width='50%' minHeight='100vh'>
        <Center>
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
  {meanings.map((meaning, i, arr) => <><Meaning id={i.toString()} {...meaning}/>{i+1 !== arr.length && <hr/>}</>)}
              <Button success onClick={() => setMeanings([...meanings, newMeaning])}>add meaning</Button>
            </Section>
          </Block>
        </Center>
      </Flex.Item>
    </Flex>
  )
}

export default App

function Center({ children }: any){
  return (
    <Flex direction='column' height='100%' width='100%'>
      <Flex.Item height='100%'/>
      <Flex.Item>
        <Flex direction='row' height='100%' width='100%'>
          <Flex.Item width='100%'/>
          <Flex.Item>
            {children}
          </Flex.Item>
          <Flex.Item width='100%'/>
        </Flex>
      </Flex.Item>
      <Flex.Item height='100%'/>
    </Flex>
  )
}

interface MeaningProps {
  id: string,
  meaning: string,
  types: string[]
}

function Meaning({ id, meaning, types }: MeaningProps){
  return (
    <Field.Container>
      <Field>
        <Label>types</Label>
        <Select placeholder='please pick types' >
          <SelectList data={TYPES}>
            {({ data, index, style }: any) => {
              return <ListItem style={style}><Checkbox></Checkbox>{data.items[index].value}</ListItem>
            }}
          </SelectList>
        </Select>
      </Field>
      <Field>
        <Label>meaning</Label>
        <TextArea/>
      </Field>
    </Field.Container>
  )
}