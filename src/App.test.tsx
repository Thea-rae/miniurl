import React from 'react'
import App from './App'
import { create } from 'react-test-renderer'
import { render , screen } from '@testing-library/react'

describe('snapshot test', () => {
  test('looks at the whole app', () => {
    let tree = create(<App />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe('App', () => {
  test('renders App component', () => {
    render(<App />)
    // screen.debug()
  })
})

