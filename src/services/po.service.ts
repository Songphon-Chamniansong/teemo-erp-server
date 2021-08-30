import { injectable, inject } from 'inversify';
import { IPoRepository } from '../repositories/po.repository';
import { ICustomerRepository } from '../repositories/customer.repository';
import TYPES from '../config/types';
import { CreatePO, PoData } from '../data/po.data';
import { JResult, setJResult } from '../data/result.data';
import { PoDocument } from '../db/models/po.model';

export interface IPoService {
    createPo(createPO: CreatePO): Promise<JResult<PoDocument>>
}

@injectable()
export class PoService implements IPoService {
    constructor(
        @inject(TYPES.IPoRepository) private poRepository: IPoRepository,
        @inject(TYPES.ICustomerRepository) private customerRepository: ICustomerRepository
    ) {}

    public async createPo(createPO: CreatePO): Promise<JResult<PoDocument>> {
        if(!createPO.customer.id) {
            const customer = {
                code: 'C-' + Date.now(),
                name: createPO.customer.name,
                address: createPO.customer.address
            };
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
            inventoryInformation: [],
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
        };
        createPO.inventories.forEach(inventory => {
            poData.inventoryInformation.push({
                inventoryId: inventory.id,
                qty: inventory.qty
            });
        });
        const po = await this.poRepository.create(poData);
        return setJResult<PoDocument>({ isSuccess: true, value: po });
    }
}
