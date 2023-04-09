// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const countMessage = screen.getByText(/count/i);
  expect(countMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId("count");
  expect(countElement.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increment = screen.getByText(/\+/i);
  const countElement = screen.getByTestId("count");
  fireEvent.click(increment);
  expect(countElement.textContent).toBe("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrement = screen.getByText(/\-/i);
  const countElement = screen.getByTestId("count");
  fireEvent.click(decrement);
  expect(countElement.textContent).toBe("-1");
});
