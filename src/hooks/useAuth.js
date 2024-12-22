import { create } from 'zustand';

export const useAuth = create((set) => ({
  isAuthenticated: false,
  user: null,
  login: (provider) => {
    // Simulate login
    set({
      isAuthenticated: true,
      user: { id: '1', name: 'Test User' }
    });
    console.log(`Logging in with ${provider}`);
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
  }
}));