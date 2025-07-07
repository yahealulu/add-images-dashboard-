import toast from 'react-hot-toast';
import { ProductsResponse } from '../types';

const API_BASE_URL = 'https://setalkel.amjadshbib.com/api';
const AUTH_TOKEN = '19|tGrGdSOVyZPxi5IhhidEKU8SX1fvff2n8yOF2GbZ9c3f04fc';

class ApiService {
  private getHeaders(): HeadersInit {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AUTH_TOKEN}`,
    };
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || 'Something went wrong');
    }
    return response.json();
  }

  async getProducts(page: number = 1): Promise<ProductsResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/products?page=${page}`, {
        headers: this.getHeaders(),
      });

      return await this.handleResponse<ProductsResponse>(response);
    } catch (error) {
      toast.error('Failed to fetch products');
      throw error;
    }
  }

  async updateProductImage(productId: number, image: File): Promise<any> {
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('_method', 'PUT');

      const response = await fetch(`${API_BASE_URL}/products/${productId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
        body: formData,
      });

      const data = await this.handleResponse(response);
      toast.success('Product image updated successfully!');
      return data;
    } catch (error) {
      toast.error('Failed to update product image');
      throw error;
    }
  }
}

export const apiService = new ApiService();