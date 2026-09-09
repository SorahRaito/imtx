import { ApiResponse, UserProfile } from '../types';

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterCredentials {
  fullName: string;
  email: string;
  password: string;
  termsAccepted: boolean;
}

const STORAGE_KEY = 'imtx_auth_user';

export const authService = {
  /**
   * Get current authenticated user session if exists
   */
  getCurrentUser(): UserProfile | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  },

  /**
   * Authenticate user with email and password
   * Extensible: Replace mock implementation with fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login`)
   */
  async login(credentials: LoginCredentials): Promise<ApiResponse<UserProfile>> {
    // Simulated network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Basic validation
    if (!credentials.email || !credentials.password) {
      return {
        success: false,
        message: 'Lütfen tüm zorunlu alanları doldurun.',
        error: 'VALIDATION_ERROR',
      };
    }

    if (credentials.password.length < 6) {
      return {
        success: false,
        message: 'Şifre en az 6 karakter olmalıdır.',
        error: 'INVALID_PASSWORD_LENGTH',
      };
    }

    // Mock user creation for demonstration
    const mockUser: UserProfile = {
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      email: credentials.email,
      fullName: credentials.email.split('@')[0].toUpperCase(),
      role: 'Enterprise Member',
      token: 'imtx_jwt_token_preview_' + Date.now(),
    };

    if (credentials.rememberMe) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser));
    }

    return {
      success: true,
      message: 'Giriş başarılı! IMTX Platform Paneline yönlendiriliyorsunuz.',
      data: mockUser,
    };
  },

  /**
   * Register a new account
   * Extensible: Replace mock implementation with fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/register`)
   */
  async register(credentials: RegisterCredentials): Promise<ApiResponse<UserProfile>> {
    await new Promise((resolve) => setTimeout(resolve, 900));

    if (!credentials.termsAccepted) {
      return {
        success: false,
        message: 'Devam etmek için IMTX Hizmet Şartlarını ve Gizlilik Politikasını kabul etmelisiniz.',
        error: 'TERMS_NOT_ACCEPTED',
      };
    }

    if (!credentials.fullName || !credentials.email || !credentials.password) {
      return {
        success: false,
        message: 'Lütfen tüm alanları eksiksiz doldurun.',
        error: 'VALIDATION_ERROR',
      };
    }

    const newUser: UserProfile = {
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      email: credentials.email,
      fullName: credentials.fullName,
      role: 'Developer Preview',
      token: 'imtx_jwt_token_preview_' + Date.now(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));

    return {
      success: true,
      message: 'Hesabınız başarıyla oluşturuldu! Hoş geldiniz.',
      data: newUser,
    };
  },

  /**
   * Log out current user
   */
  logout(): void {
    localStorage.removeItem(STORAGE_KEY);
  },
};
