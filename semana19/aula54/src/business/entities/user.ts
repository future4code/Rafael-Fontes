export enum ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export type authenticationData = {
   id: string,
   role: ROLES
}

export type user = {
   id: string,
   name: string
   email: string,
   password: string,
   role: ROLES
}