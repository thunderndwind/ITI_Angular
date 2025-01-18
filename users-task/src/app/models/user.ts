export type Role = 'admin' | 'user' | 'moderator';

export interface User {
    id: number;
    role: Role;
    username: string;
    email: string;
    phone: string;
    birthdate: string;
}