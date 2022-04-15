import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

//Classe que vai referenciar uma tabela no banco de dados
//@ (anotation) é o responsavel por informar o que o objeto está referenciando dentro do typeorm
@Entity("categories")
export class Category {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    //Criando um constructor para verificar se o id está vindo preenchido, se não cria utilizando o uuid
    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}