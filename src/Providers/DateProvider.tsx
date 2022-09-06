import { createContext, ReactNode, useState } from 'react'
import { DateTime } from 'luxon'

interface IDateContext {
  getDate: DateTime | null
  setDate: React.Dispatch<React.SetStateAction<DateTime | null>>
}

export const DateContext = createContext<IDateContext>({
  getDate: null,
  setDate: () => {},
})

type Props = {
  children?: ReactNode
}

const DateProvider: React.FC<Props> = (props) => {
  // this state will be shared with all components
  const [getDate, setDate] = useState<DateTime | null>(null)

  return (
    // this is the provider providing state
    <DateContext.Provider value={{ getDate, setDate }}>
      {props.children}
    </DateContext.Provider>
  )
}

export default DateProvider
