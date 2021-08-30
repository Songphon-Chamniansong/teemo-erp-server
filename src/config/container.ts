import { Container } from 'inversify';
import { HomeService } from '../services/home.service';
import { IPoService, PoService } from '../services/po.service';
import { IPoRepository, PoRepository } from '../repositories/po.repository';
import TYPES from './types';
import { ICustomerRepository, CustomerRepository } from '../repositories/customer.repository';
import { RequestHandler } from 'express';

export class ContainerConfigLoader {
    /**
     * register type and interface
     * @returns Container
     */
    public static Load(): Container {
        const container = new Container();
        // example binding
        // container.bind<Interface>(TYPES.Interface).to(Class);

        // middlewares
        container.bind<RequestHandler>('CustomMiddleware').toConstantValue(function customMiddleware(req: any, res: any, next: any) {
            req.user = {
                password: 'bar',
                username: 'foo'
            };
            next();
        });

        // services
        container.bind<HomeService>(TYPES.HomeService).to(HomeService);
        container.bind<IPoService>(TYPES.IPoService).to(PoService);

        // repositories
        container.bind<IPoRepository>(TYPES.IPoRepository).to(PoRepository);
        container.bind<ICustomerRepository>(TYPES.ICustomerRepository).to(CustomerRepository);

        return container;
    }
}
