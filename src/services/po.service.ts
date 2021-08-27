import { injectable, inject } from 'inversify';
import { IPoRepository } from '../repositories/po.repository';
import { ICustomerRepository } from '../repositories/customer.repository';
import TYPES from '../config/types';
import { CreatePO, PoData } from '../data/po.data';

export interface IPoService {
    createPo(createPO: CreatePO): Promise<void>
}

@injectable()
export class PoService implements IPoService {
    constructor(
        @inject(TYPES.IPoRepository) private poRepository: IPoRepository,
        @inject(TYPES.ICustomerRepository) private customerRepository: ICustomerRepository
    ) {}

    public async createPo(createPO: CreatePO): Promise<void> {
        if(!createPO.customer.id) {
            const customer = {
                code: 'C-' + Date.now(),
                name: createPO.customer.name,
                address: createPO.customer.address
            }
            const newCustomer = await this.customerRepository.create(customer);
            createPO.customer.id = newCustomer._id;
        }
        const poData: PoData = {
            code: 'PO-' + Date.now(),
            status: 'PENDING',
            customerId: createPO.customer.id,
            paymentType: {
                code: 'VISA',
                name: 'VISA',
            },
            deliveryInformation: {
                code: 'KERRY',
                name: 'KERRY'
            },
            itemsInformation: [ 
                {
                    code: 'A23-123',
                    name: 'Cat Nip',
                    price: 300,
                    qty: 3
                }
            ],
            createdInformation: {
                createdBy: '610408a19fb13806b827f426',
                createDate: new Date(),
            },
            approvedInformation: {
                approveOwmer: createPO.approveById,
            },
            companyInformation: {
                name: 'StoryGu',
                taxId: '11244',
                address: '112/44 Thailand'
            }
        }
        await this.poRepository.create(poData)
    }
}
