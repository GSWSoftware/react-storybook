import React from 'react'
import { render } from '@testing-library/react'
import { Layout } from '.'

test('renders learn react link', () => {
  const { getByText } = render(<Layout />)
  const linkElement = getByText(/porradaria/i)
  expect(linkElement).toBeDefined()
})
