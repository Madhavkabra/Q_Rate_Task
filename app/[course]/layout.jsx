'use client';
import { Container } from '../../components/Mui/material';
import PropTypes from 'prop-types';
import '@/styles/globals.css';

export default function RootLayout({ children }) {
  return <Container maxWidth='xl'>{children}</Container>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
