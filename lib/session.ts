import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions, getServerSession } from 'next-auth';
import { nurseSignin as signinNurse } from './actions';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      // @ts-ignore
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password required');
        }

        const user = await signinNurse(
          credentials?.email,
          credentials?.password
        );
        // @ts-ignore
        const { nurseSignin } = user;
        const {
          address,
          email,
          firstName,
          gender,
          lastName,
          id,
          globalId,
          phone,
          picture,
          profilePictureUrl,
          residence,
          token,
        } = nurseSignin;

        if (!user) {
          throw new Error('Email does not exist');
        }

        return {
          address,
          email,
          name: firstName + ' ' + lastName,
          firstName,
          gender,
          lastName,
          id,
          globalId,
          phone,
          image: picture || profilePictureUrl,
          picture,
          profilePictureUrl,
          residence,
          token: token,
        };
      },
    }),
  ],
  session: { strategy: 'jwt' },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
interface Session {
  address: string;
  email: string;
  firstName: string;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  lastName: string;
  id: string;
  globalId: string;
  phone: string;
  picture: string;
  profilePictureUrl: string;
  residence: string;
  token: string;
}
export async function getCurrentUser() {
  const session = (await getServerSession(authOptions)) as Session;

  return session;
}
