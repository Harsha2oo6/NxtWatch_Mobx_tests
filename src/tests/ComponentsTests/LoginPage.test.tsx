import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from '../../Components/LoginPage';
import { loginStore } from '../../Stores/LoginStore/loginstore'; 

beforeEach(() => {
  loginStore.getToken = vi.fn(() => '');
  loginStore.login = vi.fn(async () => {});
  loginStore.toggleShowPassword = vi.fn();
  loginStore.showPassword = false;
  loginStore.error = '';
});

describe('LoginPage', () => {
  it('renders username, password fields and login button', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('calls loginStore.login on form submit', async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'user' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'pass' } });
    fireEvent.click(screen.getByText('Login'));
    expect(loginStore.login).toHaveBeenCalledWith('user', 'pass');
  });

  it('shows error message if loginStore.error is set', () => {
    loginStore.error = 'Invalid credentials';
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    expect(screen.getByTestId('errorMsg')).toHaveTextContent('Invalid credentials');
  });

  it('calls toggleShowPassword on checkbox click', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByLabelText('Show Password'));
    expect(loginStore.toggleShowPassword).toHaveBeenCalled();
  });
});
