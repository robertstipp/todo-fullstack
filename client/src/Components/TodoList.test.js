import { render, screen } from '@testing-library/react';
import TodoList from './TodoList.jsx'

test('renders the TodoList Component', () => {
  render(<TodoList />);
});