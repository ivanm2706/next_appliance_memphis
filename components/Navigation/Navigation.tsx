'use client'

import React, { useState } from 'react';
import { NavHeader } from './NavHeader';
import { NavMobile } from './NavMobile';

function Navigation() {
  const [isActiveMenuMobile, setIsActiveMenuMobile] = useState(false);

  return (
    <>
      <NavHeader setIsActiveMenuMobile={setIsActiveMenuMobile} />

      <NavMobile
        isActive={isActiveMenuMobile}
        setIsActive={setIsActiveMenuMobile}
      />
    </>
  );
}

export default Navigation;
