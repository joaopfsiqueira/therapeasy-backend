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

	@Column({ name: 'login', unique: true })
	login: string;

	@Column({ name: 'password' })
	password: string;

	@BeforeInsert() //antes de inserir a senha
	@BeforeUpdate() // depois de inserir a senha (caso precisa atualizar a senha.)
	hashPassword() {
		this.password = bcrypt.hashSync(this.password, 8);
	}

	@Column({ name: 'email' })
	email: string;

	@Column({ name: 'cpf' })
	cpf: string;

	@Column({ name: 'gender' })
	gender: string;

	@Column({ name: 'type' })
	type: string;

	@Column({ type: 'timestamptz' }) // Recommended
	birth_date: Date;

	@Column({ name: 'created_at', type: 'datetime', precision: 0, nullable: false })
	created_at: Date;

	@Column({ name: 'updated_at', type: 'datetime', precision: 0, nullable: false })
	updated_at: Date;

	@Column({ name: 'active', type: 'boolean', default: true })
	active: boolean;
}
