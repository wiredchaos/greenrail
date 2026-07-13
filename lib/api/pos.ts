import { apiClient, listResource, type ListParams } from './client'
import type { Product, Category, InventoryItem, Order, Customer, ApiResult, PaginatedResponse } from '@/lib/types'

export const posApi = {
  // Products
  listProducts(params?: ListParams): Promise<ApiResult<PaginatedResponse<Product>>> {
    return listResource<Product>('/pos/products', params)
  },

  getProduct(id: string): Promise<ApiResult<Product>> {
    return apiClient.get<Product>(`/pos/products/${id}`)
  },

  createProduct(data: Omit<Product, 'id' | 'created_at' | 'updated_at'>): Promise<ApiResult<Product>> {
    return apiClient.post<Product>('/pos/products', data)
  },

  updateProduct(id: string, data: Partial<Product>): Promise<ApiResult<Product>> {
    return apiClient.patch<Product>(`/pos/products/${id}`, data)
  },

  deleteProduct(id: string): Promise<ApiResult<void>> {
    return apiClient.delete(`/pos/products/${id}`)
  },

  // Categories
  listCategories(params?: ListParams): Promise<ApiResult<PaginatedResponse<Category>>> {
    return listResource<Category>('/pos/categories', params)
  },

  createCategory(data: Omit<Category, 'id' | 'created_at'>): Promise<ApiResult<Category>> {
    return apiClient.post<Category>('/pos/categories', data)
  },

  // Inventory
  getInventory(productId: string, locationId?: string): Promise<ApiResult<InventoryItem[]>> {
    return apiClient.get<InventoryItem[]>(`/pos/inventory`, {
      product_id: productId,
      location_id: locationId,
    })
  },

  updateInventory(id: string, quantity: number): Promise<ApiResult<InventoryItem>> {
    return apiClient.patch<InventoryItem>(`/pos/inventory/${id}`, { quantity })
  },

  // Orders
  listOrders(params?: ListParams): Promise<ApiResult<PaginatedResponse<Order>>> {
    return listResource<Order>('/pos/orders', params)
  },

  getOrder(id: string): Promise<ApiResult<Order>> {
    return apiClient.get<Order>(`/pos/orders/${id}`)
  },

  createOrder(data: Omit<Order, 'id' | 'order_number' | 'created_at' | 'updated_at'>): Promise<ApiResult<Order>> {
    return apiClient.post<Order>('/pos/orders', data)
  },

  updateOrderStatus(id: string, status: Order['status']): Promise<ApiResult<Order>> {
    return apiClient.patch<Order>(`/pos/orders/${id}`, { status })
  },

  // Customers
  listCustomers(params?: ListParams): Promise<ApiResult<PaginatedResponse<Customer>>> {
    return listResource<Customer>('/pos/customers', params)
  },

  getCustomer(id: string): Promise<ApiResult<Customer>> {
    return apiClient.get<Customer>(`/pos/customers/${id}`)
  },

  createCustomer(data: Omit<Customer, 'id' | 'created_at' | 'updated_at' | 'total_orders' | 'total_spent'>): Promise<ApiResult<Customer>> {
    return apiClient.post<Customer>('/pos/customers', data)
  },
}
