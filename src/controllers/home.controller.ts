import { inject } from 'inversify';
import { controller, httpGet } from 'inversify-express-utils';
import { Authentication } from '../middleware/authenticateToken';
import TYPES from '../config/types';
import { HomeService } from '../services/home.service';

@controller('/')
export class HomeController {
    constructor(@inject(TYPES.HomeService) private homeService: HomeService) {}

    @httpGet('/', Authentication.AuthenticateToken)
    public get(): string {
        this.homeService.get();
        return 'Hellow World!!!';
    }
}
