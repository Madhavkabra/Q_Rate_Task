import React from 'react';
import { screen } from '@testing-library/react';
import renderWithTheme from '../../../utils/renderWithTheme';
import MainSidebar from './index';

describe('MainSidebar', () => {
  test('renders the sidebar with correct items', () => {
    const drawerToggle = jest.fn();
    renderWithTheme(<MainSidebar open drawerToggle={drawerToggle} />);
    const inboxTab = screen.getByRole('button', { name: /inbox/i });
    const starredTab = screen.getByRole('button', { name: /starred/i });
    const sendEmailTab = screen.getByRole('button', { name: /send email/i });

    expect(screen.getByRole('presentation')).toBeInTheDocument();
    expect(screen.getByRole('presentation')).toHaveClass('MuiDrawer-root');

    expect(inboxTab).toBeInTheDocument();
    expect(starredTab).toBeInTheDocument();
    expect(sendEmailTab).toBeInTheDocument();
  });
});
