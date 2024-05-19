import { ReactNode } from 'react';
import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import { AuthProvider, useAuth } from './auth';
import { api } from '../services';
import { toast } from 'sonner';

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

vi.mock('../services', () => ({
  api: {
    post: vi.fn(),
    defaults: {
      headers: {
        common: {},
      },
    },
  },
}));

describe('useAuth hook', () => {
  const TestComponent = () => {
    const { SignIn, SignOut, user } = useAuth();
    return (
      <div>
        <button onClick={() => SignIn({ email: 'test@example.com', password: 'password' })}>Sign In</button>
        <button onClick={SignOut}>Sign Out</button>
        <span>{user ? user.name : 'No User'}</span>
      </div>
    );
  };

  const renderWithAuthProvider = (ui: ReactNode) => {
    return render(<AuthProvider>{ui}</AuthProvider>);
  };

  it('should initialize with no user', () => {
    renderWithAuthProvider(<TestComponent />);
    expect(screen.getByText('No User')).toBeInTheDocument();
  });

  it('should sign in a user', async () => {
    const user = {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      is_active: true,
      avatar: null,
      type: 'user',
      created: '2023-01-01',
      modified: '2023-01-01',
      role: 'user',
    };
    const tokens = { access: 'fake-token' };

    (api.post as Mock).mockResolvedValueOnce({ data: { user, tokens } });

    renderWithAuthProvider(<TestComponent />);

    await act(async () => {
      screen.getByText('Sign In').click();
    });

    expect(localStorage.getItem('@applogin:user')).toEqual(JSON.stringify(user));
    expect(localStorage.getItem('@applogin:token')).toEqual(tokens.access);
    expect(api.defaults.headers.common['Authorization']).toBe(`Bearer ${tokens.access}`);
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(toast.success).toHaveBeenCalledWith('Logado com sucesso!');
  });

  it('should sign out a user', async () => {
    renderWithAuthProvider(<TestComponent />);

    await act(async () => {
      screen.getByText('Sign In').click();
    });

    await act(async () => {
      screen.getByText('Sign Out').click();
    });

    expect(localStorage.getItem('@applogin:user')).toBeNull();
    expect(localStorage.getItem('@applogin:token')).toBeNull();
    expect(api.defaults.headers.common['Authorization']).toBeUndefined();
    expect(screen.getByText('No User')).toBeInTheDocument();
  });

  it('should handle sign-in error', async () => {
    (api.post as Mock).mockRejectedValueOnce({
      response: { data: { detail: 'Invalid credentials' } },
    });

    renderWithAuthProvider(<TestComponent />);

    await act(async () => {
      screen.getByText('Sign In').click();
    });

    expect(toast.error).toHaveBeenCalledWith('Invalid credentials');
    expect(screen.getByText('No User')).toBeInTheDocument();
  });
});