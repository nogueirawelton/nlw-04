import { Router } from "express";
import { CalculateNpsController } from "../../../modules/surveysToUsers/useCases/calculateNps/CalculateNpsController";
import { ReceiveAnswerController } from "../../../modules/surveysToUsers/useCases/receiveAnswer/ReceiveAnswerController";
import { SendMailController } from "../../../modules/surveysToUsers/useCases/sendMail/SendMailController";


export const surveyToUserRoutes = Router();

const sendMailController = new SendMailController();
const receiveAnswerController = new ReceiveAnswerController();
const calculateNpsController = new CalculateNpsController();

surveyToUserRoutes.post("/sendMail", sendMailController.handle);
surveyToUserRoutes.get("/answers/:value", receiveAnswerController.handle);
surveyToUserRoutes.post("/nps/:survey_id", calculateNpsController.handle);