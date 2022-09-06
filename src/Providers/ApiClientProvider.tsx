import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

type Props = {
  children?: React.ReactNode
}

const ApiClientProvider: React.FC<Props> = (props) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  )
}

export default ApiClientProvider
