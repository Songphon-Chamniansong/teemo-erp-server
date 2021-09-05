import { Request } from 'express';
import { inject } from 'inversify';
import { BaseHttpController, controller, httpPost } from 'inversify-express-utils';
import TYPES from '../config/types';
import { JsonResult } from 'inversify-express-utils/dts/results';
import { IUserService } from '../services/user.service';
import { Authentication } from '../middleware/authenticateToken';

@controller('/user')
export class UserController extends BaseHttpController {
    constructor(@inject(TYPES.IUserService) private userService: IUserService) {
        super();
    }

    @httpPost('/create', Authentication.AuthenticateToken)
    public async create(req: Request): Promise<JsonResult> {
        const content = await this.userService.create(req.body);
        return this.json(content, 200);
    }

    @httpPost('/login')
    public async login(req: Request): Promise<JsonResult> {
        const content = await this.userService.login(req.body);
        return this.json(content, 200);
    }
}
