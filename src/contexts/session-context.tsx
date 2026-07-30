'use client';

import { createContext, useContext } from 'react';

const SessionContext = createContext({ studentName: 'Maya Chen' });
export const SessionProvider = SessionContext.Provider;
export function useSession() { return useContext(SessionContext); }
