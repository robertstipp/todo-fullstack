import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import TodoFilter from './TodoFilter.jsx'

describe('TodoFilter', () => {

  const mockToggleFilter = jest.fn()

  it('renders without crashing', () => {
    render(<TodoFilter toggleFilter={mockToggleFilter} />);
  })

  it('should display filter buttons', () => {
    render(<TodoFilter toggleFilter={mockToggleFilter} />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('To Do')).toBeInTheDocument();
  });
  
  it('calls toggleFilter function when buttons are clicked', () => {
    render(<TodoFilter toggleFilter={mockToggleFilter} />);


    userEvent.click(screen.getByText('All'));
    expect(mockToggleFilter).toHaveBeenCalledWith('all');

    userEvent.click(screen.getByText('Completed'));
    expect(mockToggleFilter).toHaveBeenCalledWith('completed');

    userEvent.click(screen.getByText('To Do'));
    expect(mockToggleFilter).toHaveBeenCalledWith('todo');
  });


});