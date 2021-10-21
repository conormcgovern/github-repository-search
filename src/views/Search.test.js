import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';
import { QueryClientProvider, QueryClient, setLogger } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

const queryClient = new QueryClient();

it('It should render search input placeholder text', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    </QueryClientProvider>
  );
  const inputPlaceholderText = screen.getByPlaceholderText(
    'Search GitHub Repositories'
  );
  expect(inputPlaceholderText).toBeInTheDocument();
});

it('It should allow text to be entered in the input', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    </QueryClientProvider>
  );
  const input = screen.getByPlaceholderText('Search GitHub Repositories');
  fireEvent.change(input, { target: { value: 'react' } });
  expect(input.value).toBe('react');
});
