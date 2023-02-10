import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import App from '../App';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom'

// https://testing-library.com/docs/example-react-router/

test('full app rendering/navigating', async () => {
  const user = userEvent.setup()

  render(<App />, { wrapper: Router})

  // verify page content for default route
  expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();

  // verify page content for expected route after navigating
  await user.click(screen.getByText(/About/i))
  expect(screen.getByText(/About me/i)).toBeInTheDocument();

})

test('landing on a bad page', () => {
  const badRoute = '/some/bad/route'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>,
  )

  // verify navigation to "no match" route
  expect(screen.getByText(/Error 404/i)).toBeInTheDocument()
})

