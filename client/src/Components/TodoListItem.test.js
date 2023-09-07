import { render, screen } from '@testing-library/react';
import TodoListitem from './TodoListitem.jsx'

test('renders the TodoListItem Component', () => {
  render(<TodoListitem />);
});