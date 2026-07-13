import { apiClient, listResource, type ListParams } from './client'
import type { Payment, Receipt, ApiResult, PaginatedResponse } from '@/lib/types'

export const paymentsApi = {
  // Payments
  listPayments(params?: ListParams): Promise<ApiResult<PaginatedResponse<Payment>>> {
    return listResource<Payment>('/payments', params)
  },

  getPayment(id: string): Promise<ApiResult<Payment>> {
    return apiClient.get<Payment>(`/payments/${id}`)
  },

  initiatePayment(data: Omit<Payment, 'id' | 'created_at' | 'processed_at'>): Promise<ApiResult<Payment>> {
    return apiClient.post<Payment>('/payments', data)
  },

  cancelPayment(id: string): Promise<ApiResult<Payment>> {
    return apiClient.patch<Payment>(`/payments/${id}/cancel`, {})
  },

  refundPayment(id: string, amount?: number): Promise<ApiResult<Payment>> {
    return apiClient.post<Payment>(`/payments/${id}/refund`, { amount })
  },

  // Receipts
  getReceipt(id: string): Promise<ApiResult<Receipt>> {
    return apiClient.get<Receipt>(`/payments/receipts/${id}`)
  },

  sendReceipt(id: string, destination: string): Promise<ApiResult<Receipt>> {
    return apiClient.post<Receipt>(`/payments/receipts/${id}/send`, { destination })
  },

  // Provider abstraction — swap provider without changing call sites
  getProviders(): Promise<ApiResult<{ id: string; name: string; methods: string[]; active: boolean }[]>> {
    return apiClient.get('/payments/providers')
  },
}
