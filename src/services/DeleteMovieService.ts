import { getRepository } from 'typeorm';
import { Movie } from '../entities/Movie';

export class DeleteMovieService {
    async execute( id: string ) {
        const repo = getRepository(Movie);

        if(!(await repo.findOne(id))) {
            return new Error("Movie does not exists!");
        }

        await repo.delete(id);
    }
}