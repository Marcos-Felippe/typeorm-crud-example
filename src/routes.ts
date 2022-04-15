import { Router } from "express";

import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";

import { CreateMovieController } from "./controllers/CreateMovieController";
import { GetAllMoviesController } from "./controllers/GetAllMoviesController";
import { DeleteMovieController } from "./controllers/DeleteMovieController";


const routes = Router();

//Routes das categories
routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

//Routes dos movies
routes.post("/movies", new CreateMovieController().handle);
routes.get("/movies", new GetAllMoviesController().handle);
routes.delete("/movies/:id", new DeleteMovieController().handle);

export { routes }