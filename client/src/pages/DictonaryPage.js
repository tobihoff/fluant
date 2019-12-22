import React from 'react';
import { BadgeContainer } from '../components/Container/Container';
import { Dictonary } from '../components/Text/Text';
import Badge from '../components/Badges/Badge';

export default function DictonaryPage() {
  return (
    <>
      <BadgeContainer>
        <Badge>Hallo</Badge>
      </BadgeContainer>
      <Dictonary>Your Dictonary</Dictonary>
    </>
  );
}
