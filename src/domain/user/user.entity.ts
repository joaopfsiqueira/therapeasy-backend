import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import bcrypt = require('bcrypt');

@Entity()
export class Users {
	constructor(
		login: string,
		password: string,
		email: string,
		cpf: string,
		gender: string,
		type: string,
		birth_date: Date,
		created_at: Date,
		updated_at: Date,
		active: boolean,
	) {
		this.login = login;
		this.password = password;
		this.email = email;
		this.cpf = cpf;
		this.gender = gender;
		this.type = type;
		this.birth_date = birth_date;
		this.created_at = created_at;
		this.updated_at = updated_at;
		this.active = active;
	}

	@PrimaryGeneratedColumn('increment')
	id: number = 0;

	@Column({ name: 'login', unique: true, type: 'varchar', length: 50 })
	login: string;

	@Column({ name: 'password', type: 'varchar', length: 255 })
	password: string;

	@BeforeInsert() //antes de inserir a senha
	@BeforeUpdate() // depois de inserir a senha (caso precisa atualizar a senha.)
	hashPassword() {
		this.password = bcrypt.hashSync(this.password, 8);
	}

	@Column({ name: 'email', unique: true, type: 'varchar', length: 100 })
	email: string;

	@Column({ name: 'cpf', unique: true, type: 'varchar', length: 11 })
	cpf: string;

	@Column({ name: 'gender', type: 'varchar', length: 1 })
	gender: string;

	@Column({ name: 'type', type: 'varchar', length: 15, nullable: true })
	type: string;

	@Column({ type: 'datetime' })
	birth_date: Date;

	@Column({ name: 'created_at', type: 'datetime', precision: 0, nullable: false })
	created_at: Date;

	@Column({ name: 'updated_at', type: 'datetime', precision: 0, nullable: false })
	updated_at: Date;

	@Column({ name: 'active', type: 'boolean', default: true })
	active: boolean;
}
