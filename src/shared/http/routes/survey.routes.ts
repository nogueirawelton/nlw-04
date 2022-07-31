import { Router } from "express";
import { CreateSurveyController } from "../../../modules/surveys/useCases/createSurvey/CreateSurveyController";
import { ListSurveysController } from "../../../modules/surveys/useCases/listSurveys/ListSurveysController";

export const surveyRoutes = Router();

const createSurveyController = new CreateSurveyController();
const listSurveysController = new ListSurveysController();

surveyRoutes.post("/", createSurveyController.handle);
surveyRoutes.get("/", listSurveysController.handle);