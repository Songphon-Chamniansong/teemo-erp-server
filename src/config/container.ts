import { Container } from 'inversify';
import TYPES from './types';
import { HomeService } from '../services/home.service';
import { IPoService, PoService } from '../services/po.service';
import { IPoRepository, PoRepository } from '../repositories/po.repository';
import { ICustomerRepository, CustomerRepository } from '../repositories/customer.repository';
import { IUserRepository, UserRepository } from '../repositories/user.repository';
import { IUserService, UserService } from '../services/user.service';
import { IInventoryRepository, InventoryRepository } from '../repositories/inventory.repository';
import { IInventoryService, InventoryService } from '../services/inventory.service';

export class ContainerConfigLoader {
    /**
     * register type and interface
     * @returns Container
     */
    public static Load(): Container {
        const container = new Container();
        // example binding
        // container.bind<Interface>(TYPES.Interface).to(Class);

        // services
        container.bind<HomeService>(TYPES.HomeService).to(HomeService);
        container.bind<IPoService>(TYPES.IPoService).to(PoService);
        container.bind<IUserService>(TYPES.IUserService).to(UserService);
        container.bind<IInventoryService>(TYPES.IInventoryService).to(InventoryService);

        // repositories
        container.bind<IPoRepository>(TYPES.IPoRepository).to(PoRepository);
        container.bind<ICustomerRepository>(TYPES.ICustomerRepository).to(CustomerRepository);
        container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
        container.bind<IInventoryRepository>(TYPES.IInventoryRepository).to(InventoryRepository);

        return container;
    }
}
