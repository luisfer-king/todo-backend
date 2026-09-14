import { User } from "./user.entity";

export interface UserCreateData {
    email: string;
    name: string | null;
    password: string;
    role: 'CLIENT' | 'ADMIN';
    status: 'ACTIVE' | 'BLOCKED';
}

export interface UserUpdateData {
    email?: string;
    name?: string | null;
    password?: string;
    role?: 'CLIENT' | 'ADMIN';
    status?: 'ACTIVE' | 'BLOCKED';
}

export abstract class UserRepository {
    abstract findAll(): Promise<User[]>;
    abstract findById(id: string): Promise<User | null>;
    abstract findByEmail(email: string): Promise<User | null>;
    abstract create(data: UserCreateData): Promise<User>;
}
