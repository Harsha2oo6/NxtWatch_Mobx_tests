import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LogoutPopup from '../../Components/LogoutPopup';
import { loginStore } from '../../Stores/LoginStore/loginstore';

beforeEach(() => {
  loginStore.logout = vi.fn();
});

describe('LogoutPopup', () => {
  it('renders logout button', () => {
    render(
      <MemoryRouter>
        <LogoutPopup />
      </MemoryRouter>
    );
    expect(screen.getByTestId('logoutbtn')).toBeInTheDocument();
  });

  it('shows popup on logout button click', async () => {
    render(
      <MemoryRouter>
        <LogoutPopup />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId('logoutbtn'));
    expect(await screen.findByTestId('logoutpopup')).toBeInTheDocument();
    expect(screen.getByText('Are you sure you want to logout?')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });

  it('calls logout on confirm', async () => {
    render(
      <MemoryRouter>
        <LogoutPopup />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId('logoutbtn'));
    const confirmBtn = await screen.findByText('Confirm');
    fireEvent.click(confirmBtn);
    expect(loginStore.logout).toHaveBeenCalled();
  });
});
