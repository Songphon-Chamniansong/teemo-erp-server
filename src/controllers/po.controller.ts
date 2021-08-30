import { Request } from 'express';
import { inject } from 'inversify';
import { BaseHttpController, controller, httpPost } from 'inversify-express-utils';
import { IPoService } from '../services/po.service';
import TYPES from '../config/types';
import { JsonResult } from 'inversify-express-utils/dts/results';

@controller('/po')
export class PoController extends BaseHttpController {
    constructor(@inject(TYPES.IPoService) private poService: IPoService) {
        super();
    }

    @httpPost('/create')
    public async create(req: Request): Promise<JsonResult> {
        const content = await this.poService.createPo(req.body);
        return this.json(content, 200);
    }
}
