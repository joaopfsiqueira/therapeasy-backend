import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Users } from './user.entity';
import { IUserRepository } from '../../interfaces/user/user.repository.interface';

class UserRepository implements IUserRepository {
	AccountRepository: Repository<Users>;

	constructor() {
		this.AccountRepository = AppDataSource.getRepository(Users);
	}
}

export default UserRepository;
