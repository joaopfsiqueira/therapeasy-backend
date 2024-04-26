import { Users } from '../../domain/user/user.entity';

export interface IUserService {
	create(body: Users): Promise<Users>;
}
