import { DataSource, Repository } from 'typeorm';
import { Users } from './user.entity';
import { IUserRepository } from '../../interfaces/user/user.repository.interface';

class UserRepository implements IUserRepository {
	AccountRepository: Repository<Users>;

	constructor(AccountRepository: DataSource) {
		this.AccountRepository = AccountRepository.getRepository(Users);
	}
}

export default UserRepository;
