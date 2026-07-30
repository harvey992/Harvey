'use client';

import { createContext, useContext } from 'react';
import { student } from '@/data/payplate';

type SessionValue = {
  studentName: string;
  university: string;
  email: string;
  avatar: string;
  verified: boolean;
  rewardsPoints: number;
  walletBalance: number;
  rewardLevel: number;
};

const SessionContext = createContext<SessionValue>({
  studentName: student.name,
  university: student.university,
  email: student.email,
  avatar: student.avatar,
  verified: student.verified,
  rewardsPoints: student.rewardsPoints,
  walletBalance: student.walletBalance,
  rewardLevel: student.rewardLevel,
});

export const SessionProvider = SessionContext.Provider;
export function useSession() {
  return useContext(SessionContext);
}
