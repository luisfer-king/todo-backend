import { PrismaService } from "../../../../shared/infrastructure/prisma/prisma.service";
import { User } from "../domain/user.entity";
import { UserCreateData, UserRepository } from "../domain/user.repository";

export class PrismaUserRepository implements UserRepository {
    constructor(private readonly prisma: PrismaService) {}

    private toDomain(row: any) {
        return new User(
            row.id,
            row.email,
            row.name,
            row.password,
            row.role,
            row.status,
        );
    }

    async findAll(): Promise<User[]> {
        const users = await this.prisma.user.findMany();
        return users.map((user) => this.toDomain(user));
    }

    async create(user: UserCreateData) {
        const row = await this.prisma.user.create(user);
        return this.toDomain(row);
    }
}
