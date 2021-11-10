import { hash } from 'bcryptjs';

export const bcrypt = async (str) => {
  const hashedPassword = await hash(str, 12);
  return hashedPassword;
};
