import prisma from './prisma'

export const login = async ({ email }: { email: string }) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })

    const userData = {
      email: user?.email,
      username: user?.username,
    }

    if (user) {
      return userData
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

export const register = async (userData: {
  username: string
  email: string
  password: string
  role?: string
}) => {
  const { username, email, password, role } = userData
  try {
    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: password,
        role: 'member',
      },
    })
    return { status: true, statusCode: 200, message: 'success register', user }
  } catch (error) {
    return { status: false, statusCode: 400, message: 'gagal register' }
  }
}
