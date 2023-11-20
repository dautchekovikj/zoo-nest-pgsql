import { UserModel } from 'src/domain/model/user.model';
import { UserRepository } from 'src/domain/repositories/user.repository.interface';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class DatabaseUserRepository implements UserRepository {
    private readonly userEntityRepository;
    private readonly jwtService;
    constructor(userEntityRepository: Repository<User>, jwtService: JwtService);
    findUserByUsernameAndPassword(username: string, password: string): Promise<UserModel>;
    login(username: string, password: string): Promise<{
        access_token: string;
    }>;
    private toUser;
}
