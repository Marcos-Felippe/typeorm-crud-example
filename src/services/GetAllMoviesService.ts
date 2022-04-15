import { getRepository } from 'typeorm';
import { Movie } from '../entities/Movie';

export class GetAllMoviesService {
    async execute() {
        const repo = getRepository(Movie);

        const movies = await repo.find({
            relations: ["category"]
        });

        return movies;
    }
}