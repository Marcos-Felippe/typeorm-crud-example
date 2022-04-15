import { Request, Response } from 'express';
import { GetAllCategorieService } from '../services/GetAllCategoriesService';

export class GetAllCategoriesController {
    async handle(request: Request, response: Response) {

        const service = new GetAllCategorieService();

        const categories = await service.execute();

        return response.json(categories);
    }
}