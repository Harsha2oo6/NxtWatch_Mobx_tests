import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SideNavBar, { RenderNavlinks } from '../../Components/Sidenavbar';
import { navItems } from '../../Constants/Paths';

// Unit test: renders all nav links and footer

describe('SideNavBar', () => {
  it('renders all nav links and footer', () => {
    render(
      <MemoryRouter>
        <SideNavBar />
      </MemoryRouter>
    );
    navItems.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });
});

describe('RenderNavlinks', () => {
  it('renders all nav links', () => {
    render(
      <MemoryRouter>
        <RenderNavlinks navItems={navItems} />
      </MemoryRouter>
    );
    navItems.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });
});
