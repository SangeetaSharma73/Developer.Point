declare module 'passport-google-oauth20' {
  import { Strategy as PassportStrategy } from 'passport';

  export class Strategy extends PassportStrategy {
    constructor(
      options: Record<string, unknown>,
      verify: (
        accessToken: string,
        refreshToken: string,
        profile: unknown,
        done: (error?: Error | null | string, user?: unknown, info?: unknown) => void
      ) => void
    );
  }
}
