import { Lucia } from 'lucia';

export const auth = new Lucia({
  sessionCookie: {
    name: 'session',
    attributes: {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
    }
  }
});
