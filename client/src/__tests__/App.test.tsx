import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('App', () => {
  beforeEach(() => {
    mockFetch.mockReset();
  });

  it('renders hello and goodbye buttons', () => {
    render(<App />);
    expect(screen.getByText('Say Hello')).toBeInTheDocument();
    expect(screen.getByText('Say Goodbye')).toBeInTheDocument();
  });

  it('shows Hello World message when hello button is clicked', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Hello World' }),
    });

    render(<App />);
    fireEvent.click(screen.getByText('Say Hello'));

    // Then show the message
    await screen.findByText('Hello World');
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('shows Tschüss! message when goodbye button is clicked', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Tschüss!' }),
    });

    render(<App />);
    fireEvent.click(screen.getByText('Say Goodbye'));

    await screen.findByText('Tschüss!');
    expect(screen.getByText('Tschüss!')).toBeInTheDocument();
  });

  it('shows error message when fetch fails', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    render(<App />);
    fireEvent.click(screen.getByText('Say Hello'));

    await screen.findByText('Could not reach the server!');
    expect(screen.getByText('Could not reach the server!')).toBeInTheDocument();
  });
});
