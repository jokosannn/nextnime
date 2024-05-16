import { prisma } from './prisma';
import bcrypt from 'bcrypt';

export const login = async (userLogin: { email: string; password: string }) => {
  try {
    const user = await prisma.user.findUnique({ where: { email: userLogin.email } });

    const userData = {
      email: user?.email,
      username: user?.username,
      password: user?.password,
    };

    if (user) {
      return userData;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const register = async (userData: { username: string; email: string; password: string }) => {
  const q = await prisma.user.findUnique({ where: { email: userData.email } });
  if (q) {
    return { status: false, statusCode: 400, message: 'email sudah ada' };
  } else {
    userData.password = await bcrypt.hash(userData.password, 5);
    try {
      const user = await prisma.user.create({
        data: {
          username: userData.username,
          email: userData.email,
          password: userData.password,
        },
      });
      return { status: true, statusCode: 200, message: 'success register', user };
    } catch (error) {
      return { status: false, statusCode: 400, message: 'gagal register' };
    }
  }
};

export const loginWithGoogle = async (
  userData: { username: string; email: string; image: string },
  callback: any
) => {
  const q = await prisma.user.findUnique({
    where: {
      email: userData.email,
    },
  });

  if (q) {
    await prisma.user
      .update({ where: { email: userData.email }, data: userData })
      .then(() => {
        callback({ status: true, message: 'login google berhasil', data: userData });
      })
      .catch((error) => {
        callback({ status: false, message: error });
      });
  } else {
    await prisma.user
      .create({ data: userData })
      .then(() => {
        callback({ status: true, message: 'login google berhasil', data: userData });
      })
      .catch((error) => {
        callback({ status: false, message: error });
      });
  }
};
