'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleRegistry, createStyleRegistry } from 'styled-jsx';

export default function StyledJsxRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styleRegistry] = useState(() => createStyleRegistry());

  useServerInsertedHTML(() => {
    const styles = styleRegistry.styles();
    styleRegistry.flush();
    return <>{styles}</>;
  });

  return <StyleRegistry registry={styleRegistry}>{children}</StyleRegistry>;
}
