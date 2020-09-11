import React from 'react'
import { render } from '@testing-library/react'
import { Layout } from '.'

describe('MAIN LAYOUT', () => {
  it('should render the main layout and all the sub screens', async () => {
    const { getByText } = render(<Layout />)
    const linkElement = getByText(/porradaria/i)
    expect(linkElement).toBeDefined()
  })

  it('true should be true', () => {
    expect(true).toBe(false)
  })
})
