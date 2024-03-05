import { PermissionType } from "./permission-type";

export interface DatabaseItem {
    email: string;
    password: string;
    permission: PermissionType;
}

export const Database: DatabaseItem[] = [
    {
        email: "email@email.com",
        password: "123456",
        permission: PermissionType.ADMIN
    },
    {
        email: "email_second@email.com",
        password: "123456",
        permission: PermissionType.USER
    },
]