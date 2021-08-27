import { injectable } from 'inversify';
import PoModel, { PoDocument } from '../db/models/po.model';
import { PoData } from '../data/po.data';

export interface IPoRepository {
    create(poData: PoData): Promise<PoDocument>;
}

@injectable()
export class PoRepository implements IPoRepository {
    public async create(poData: PoData): Promise<PoDocument> {
        const result = await PoModel.create(poData);
        return result;
    }
}
