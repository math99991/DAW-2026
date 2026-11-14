import { useEffect, useState } from "react";
import type { Product } from "../dtos/product";
import { ProductService } from "../services/product-service";

export function useProduct() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        ProductService.listAll()
            .then(setProducts)
            .catch(e => setError(e.message))
            .finally(() => setLoading(false));
    }, []);

    return {products, loading, error};
}