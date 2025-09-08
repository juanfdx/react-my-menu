import type { RefObject } from 'react';

type RefKeys =
  | 'email'
  | 'name'
  | 'phone'

export type InputRefs = Record<RefKeys, RefObject<HTMLInputElement>>;


