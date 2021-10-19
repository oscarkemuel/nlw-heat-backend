import { Request, Response } from 'express';
import { Get3LastMessagesService } from '../services/Get3LastMessagesService';

class Get3LastMessagesController {
  async handle(req: Request, res: Response){
    const service = new Get3LastMessagesService();

    const result  = await service.excute();

    return res.json(result);
  }
}

export { Get3LastMessagesController }