import { NextFunction, Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { IPoService } from '../services/po.service';
import TYPES from '../config/types';

@controller('/po')
export class PoController {
    constructor(@inject(TYPES.IPoService) private poService: IPoService) {
    }

    @httpPost('/create')
    public create(req: Request, res: Response, next: NextFunction): string {
        this.poService.createPo(req.body);
        return 'Hellow World!!!';
    }
}
