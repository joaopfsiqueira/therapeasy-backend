import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Users } from './domain/user/user.entity';

class AppDataSource {
	DataSource: DataSource;

	constructor() {
		this.DataSource = new DataSource({
			type: 'mysql',
			host: 'localhost',
			port: 5432,
			username: 'mysql',
			password: 'password',
			database: 'therapy',
			synchronize: true,
			logging: false,
			entities: [Users],
			migrations: [],
			subscribers: [],
		});
	}
}

export default AppDataSource;
