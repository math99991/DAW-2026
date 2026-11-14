import { api } from '../../../lib/axios';
import type { Product } from '../dtos/product';

const ENDPOINT = '/products?key=e0b70390';

export const ProductService = {
    async listAll(): Promise<Product[]> {
        const result = await api.get<Product[]>(ENDPOINT);
        return result.data;
    }
}
