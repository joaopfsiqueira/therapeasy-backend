import { Users } from '../../domain/user/user.entity';
import { Repository } from 'typeorm';

export interface IUserRepository {
	AccountRepository: Repository<Users>;
}
