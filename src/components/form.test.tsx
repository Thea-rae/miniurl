import React from "react";
import { render , fireEvent, waitForElement, wait} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import ShrinkForm from "./form"

describe('url shortening form', () => {
  it("submits a url and slug", async () => {
    let handleSubmit: () => void
    handleSubmit = jest.fn()

    const { getByLabelText, getByText} = render(<ShrinkForm handleSubmit/>)
    const testUrl = 'https://thearae.com'

    const urlInput = await waitForElement(() => getByLabelText('Url to shrink', {exact: false, selector: 'input'}))
    const slugInput = await waitForElement(() => getByLabelText('Custom Slug', {exact: false, selector: 'input'}))
    
    fireEvent.change(urlInput, {target: {value: testUrl}})
    fireEvent.change(slugInput, {target: {value: 'testThings'}})

    const button = await waitForElement(() => getByText('Shrink'))
    fireEvent.click(button)
    
    
  })
})
