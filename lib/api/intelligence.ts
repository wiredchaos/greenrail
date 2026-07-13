import { apiClient, listResource, type ListParams } from './client'
import type { Signal, Insight, ActionRecord, ApiResult, PaginatedResponse } from '@/lib/types'

export const intelligenceApi = {
  // Signals
  listSignals(params?: ListParams): Promise<ApiResult<PaginatedResponse<Signal>>> {
    return listResource<Signal>('/intelligence/signals', params)
  },

  getSignal(id: string): Promise<ApiResult<Signal>> {
    return apiClient.get<Signal>(`/intelligence/signals/${id}`)
  },

  createSignal(data: Omit<Signal, 'id' | 'created_at'>): Promise<ApiResult<Signal>> {
    return apiClient.post<Signal>('/intelligence/signals', data)
  },

  // Insights
  listInsights(params?: ListParams): Promise<ApiResult<PaginatedResponse<Insight>>> {
    return listResource<Insight>('/intelligence/insights', params)
  },

  getInsight(id: string): Promise<ApiResult<Insight>> {
    return apiClient.get<Insight>(`/intelligence/insights/${id}`)
  },

  updateInsightStatus(id: string, status: Insight['status']): Promise<ApiResult<Insight>> {
    return apiClient.patch<Insight>(`/intelligence/insights/${id}`, { status })
  },

  // Actions
  recordAction(data: Omit<ActionRecord, 'id' | 'created_at'>): Promise<ApiResult<ActionRecord>> {
    return apiClient.post<ActionRecord>('/intelligence/actions', data)
  },

  listActions(params?: ListParams): Promise<ApiResult<PaginatedResponse<ActionRecord>>> {
    return listResource<ActionRecord>('/intelligence/actions', params)
  },
}
