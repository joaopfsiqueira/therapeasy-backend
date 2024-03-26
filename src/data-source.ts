import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Users } from './domain/user/user.entity';

class AppDataSource {
	DataSource: DataSource;

	constructor() {
		this.DataSource = new DataSource({
			type: 'postgres',
			host: 'postgres',
			port: 5432,
			username: 'postgres',
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
