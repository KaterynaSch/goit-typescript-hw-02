/*
  У вас є перелік UserRole, який використовується для класифікації 
  користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль
   користувача з її описом.
*/

export enum UserRoles {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type RolesDescription = Record<UserRoles, string>;
const RoleDescription: RolesDescription = {
  [UserRoles.admin]: 'Admin User',
  [UserRoles.editor]: 'Editor User',
  [UserRoles.guest]: 'Guest User',
}
// Замініть наступний код на версію за допомогою Record
// const RoleDescription = {
//   admin: 'Admin User',
//   editor: 'Editor User',
//   guest: 'Guest User',
// };

export {};