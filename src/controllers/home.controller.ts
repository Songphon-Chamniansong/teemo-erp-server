import { inject } from 'inversify';
import { controller, httpGet } from 'inversify-express-utils';
import { authenticateToken } from '../middleware/authenticateToken';
import TYPES from '../config/types';
import { HomeService } from '../services/home.service';

@controller('/')
export class HomeController {
    constructor(@inject(TYPES.HomeService) private homeService: HomeService) {}

    @httpGet('/', authenticateToken)
    public get(): string {
        this.homeService.get();
        return 'Hellow World!!!';
    }
}
