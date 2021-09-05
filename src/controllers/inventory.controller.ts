import { Request } from 'express';
import { inject } from 'inversify';
import { BaseHttpController, controller, httpPost } from 'inversify-express-utils';
import TYPES from '../config/types';
import { JsonResult } from 'inversify-express-utils/dts/results';
import { Authentication } from '../middleware/authenticateToken';
import { IInventoryService } from '../services/inventory.service';

@controller('/inventory', Authentication.AuthenticateToken)
export class InventoryController extends BaseHttpController {
    constructor(@inject(TYPES.IInventoryService) private inventoryService: IInventoryService) {
        super();
    }

    @httpPost('/create')
    public async create(req: Request): Promise<JsonResult> {
        const content = await this.inventoryService.create(req.body);
        return this.json(content, 200);
    }
}
