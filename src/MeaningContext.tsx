import React, { createContext, useState, ReactNode, useMemo } from 'react'

export type MeaningData = {
  meaning: string
  types: string[]
}

 

interface MeaningsContextShape {
  meanings: MeaningData[]
  addMeaning: () => void
  deleteMeaning: (meaningIndex: number) => void
}

export const MeaningsContext = createContext<MeaningsContextShape>({
  meanings: [],
  addMeaning: () => {},
  deleteMeaning: () => {}
})

const newMeaning: MeaningData = {
  meaning: '',
  types: [] 
}

export function MeaningsProvider({ children }: { children: ReactNode }) {
  const [meanings, setMeanings] = useState<MeaningData[]>([])

  const value = useMemo<MeaningsContextShape>(() => {
    return {
      meanings,
      addMeaning: () => setMeanings([...meanings, newMeaning]),
      deleteMeaning: (meaningIndex: number) => setMeanings(meanings.filter((meaning, i) => i !== meaningIndex))
    }
  }, [meanings])

  return (
    <MeaningsContext.Provider value={value}>
      {children}
    </MeaningsContext.Provider>
  )
}