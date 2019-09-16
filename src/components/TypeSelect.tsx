import React from 'react'
import { Select, SelectList, ListItem, Flex, Checkbox } from '@exivity/ui'

const TYPES = [
  { key: 'phr.', value: 'phrase' }, 
  { key: 'exp.', value: 'expression'}
]

export function TypeSelect() {
  return (
    <Select placeholder='please pick types' >
      <SelectList data={TYPES}>
        {Type}
      </SelectList>
    </Select>
  )
  
}

function Type({ data, index, style }: any) {
  return (
    <ListItem style={style}> 
      <Flex paddingTop={2}>
        <Flex.Item marginRight={2}>
          <Checkbox/>
        </Flex.Item>
        <Flex.Item paddingBottom={5}>
          {data.items[index].value}
        </Flex.Item>
      </Flex>
    </ListItem>
  )
}