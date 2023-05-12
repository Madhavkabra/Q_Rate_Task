import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import BottomNavigation from './index';

describe('BottomNavigation', () => {
  test('renders the navigation', () => {
    render(<BottomNavigation />);
    const tabOne = screen.getByRole('tab', { name: /item one/i });
    const tabTwo = screen.getByRole('tab', { name: /item two/i });
    const tabThree = screen.getByRole('tab', { name: /item three/i });
    const tabFour = screen.getByRole('tab', { name: /item four/i });
    const tabFive = screen.getByRole('tab', { name: /item five/i });
    expect(tabOne).toBeInTheDocument();
    expect(tabTwo).toBeInTheDocument();
    expect(tabThree).toBeInTheDocument();
    expect(tabFour).toBeInTheDocument();
    expect(tabFive).toBeInTheDocument();
  });

  test('changes active tab on click', () => {
    render(<BottomNavigation />);
    const tabTwo = screen.getByRole('tab', { name: /item two/i });
    const tabThree = screen.getByRole('tab', { name: /item three/i });
    act(() => {
      tabTwo.click();
    });
    expect(tabTwo).toHaveAttribute('aria-selected', 'true');
    expect(tabThree).not.toHaveAttribute('aria-selected', 'true');
    act(() => {
      tabThree.click();
    });
    expect(tabTwo).not.toHaveAttribute('aria-selected', 'true');
    expect(tabThree).toHaveAttribute('aria-selected', 'true');
  });
});
