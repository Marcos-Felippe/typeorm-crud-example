import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Category } from './Category';

//Classe que vai referenciar uma tabela no banco de dados
//@ (anotation) é o responsavel por informar o que o objeto está referenciando dentro do typeorm
@Entity("movies")
export class Movie {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @Column()
    category_id: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category: Category;

    @CreateDateColumn()
    created_at: Date;

    //Criando um constructor para verificar se o id está vindo preenchido, se não cria utilizando o uuid
    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}