import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

beforeEach(() => {
  mockFetch.mockReset();
});

describe('App', () => {
  it('renders greeting buttons', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /Say Hello/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Say Goodbye/i })).toBeInTheDocument();
  });

  it('shows initial prompt message', () => {
    render(<App />);
    expect(screen.getByText(/Click a button/)).toBeInTheDocument();
  });

  it('shows loading state when fetching', async () => {
    mockFetch.mockImplementation(() => new Promise(() => {})); // Never resolves
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /Say Hello/i }));
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('shows hello message after successful API call', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ message: 'Hello World' }),
    });

    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Say Hello/i }));

    await waitFor(() => {
      expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    });
  });

  it('shows goodbye message after successful API call', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ message: 'Tschüss!' }),
    });

    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Say Goodbye/i }));

    await waitFor(() => {
      expect(screen.getByText(/Tschüss/)).toBeInTheDocument();
    });
  });

  it('shows error message on API failure', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 500,
    });

    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Say Hello/i }));

    await waitFor(() => {
      expect(screen.getByText(/HTTP 500/)).toBeInTheDocument();
    });
  });
});
