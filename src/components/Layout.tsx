import React, { ReactNode } from 'react'
import { Flex, Widget } from '@exivity/ui'

interface LayoutProps {
  left: ReactNode
  right: ReactNode
}

export function Layout({ left, right }: LayoutProps){
  return (
    <Flex>
      <Flex.Item width='50%'>
        <Widget width='100%' height='100vh' sticky>
          <Center>{left}</Center>
        </Widget>
      </Flex.Item>
      <Flex.Item width='50%' minHeight='100vh'>
        <Center>{right}</Center>
      </Flex.Item>
    </Flex>
  )
}

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