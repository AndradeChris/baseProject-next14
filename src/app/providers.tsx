import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyle from '@/styles/global'
import { PropsWithChildren } from 'react'

export function Providers({ children }: PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      {children}
    </StyledComponentsRegistry>
  )
}
