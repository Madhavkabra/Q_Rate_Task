import React from 'react';
import MiniSidebar from './index';
import renderWithTheme from '../../../utils/renderWithTheme';

describe('MiniSidebar component', () => {
  it('renders a list of menu items', () => {
    const { getByText } = renderWithTheme(<MiniSidebar />);
    expect(getByText('Inbox')).toBeInTheDocument();
    expect(getByText('Starred')).toBeInTheDocument();
    expect(getByText('Send email')).toBeInTheDocument();
    expect(getByText('Drafts')).toBeInTheDocument();
  });
});
