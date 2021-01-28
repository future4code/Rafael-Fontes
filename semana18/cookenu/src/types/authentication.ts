export enum ROLES {
    NORMAL="NORMAL",
    ADMIN="ADMIN"
}
  
export type AuthenticationData = {
    id: string,
    role: ROLES
}