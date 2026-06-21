// ============================================================
// GREENRAILS — Base API Client
// Provider-agnostic REST abstraction layer
// ============================================================

import type { ApiResult, PaginatedResponse } from '@/lib/types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

export interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>
}

function buildUrl(path: string, params?: Record<string, string | number | boolean | undefined>): string {
  const url = new URL(`${API_BASE_URL}${path}`, typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000')
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value))
      }
    })
  }
  return url.toString()
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<ApiResult<T>> {
  const { params, ...fetchOptions } = options

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
  }

  // Auth token injection point — swap with real auth provider
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('gr_token')
    if (token) {
      (headers as Record<string, string>)['Authorization'] = 'Bearer ' + token
    }
  }

  try {
    const response = await fetch(buildUrl(path, params), {
      ...fetchOptions,
      headers,
    })

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}))
      return {
        data: null,
        error: {
          code: String(response.status),
          message: errorBody.message || response.statusText,
          details: errorBody,
        },
      }
    }

    const data = await response.json()
    return { data, error: null }
  } catch (err) {
    return {
      data: null,
      error: {
        code: 'NETWORK_ERROR',
        message: err instanceof Error ? err.message : 'Network request failed',
      },
    }
  }
}

// ——————————————————————————————————————
// HTTP method helpers
// ——————————————————————————————————————

export const apiClient = {
  get<T>(path: string, params?: RequestOptions['params']): Promise<ApiResult<T>> {
    return request<T>(path, { method: 'GET', params })
  },

  post<T>(path: string, body: unknown): Promise<ApiResult<T>> {
    return request<T>(path, {
      method: 'POST',
      body: JSON.stringify(body),
    })
  },

  put<T>(path: string, body: unknown): Promise<ApiResult<T>> {
    return request<T>(path, {
      method: 'PUT',
      body: JSON.stringify(body),
    })
  },

  patch<T>(path: string, body: unknown): Promise<ApiResult<T>> {
    return request<T>(path, {
      method: 'PATCH',
      body: JSON.stringify(body),
    })
  },

  delete<T>(path: string): Promise<ApiResult<T>> {
    return request<T>(path, { method: 'DELETE' })
  },
}

// ——————————————————————————————————————
// Pagination helper
// ——————————————————————————————————————

export interface ListParams {
  page?: number
  per_page?: number
  search?: string
  sort?: string
  order?: 'asc' | 'desc'
  [key: string]: string | number | boolean | undefined
}

export async function listResource<T>(
  path: string,
  params: ListParams = {}
): Promise<ApiResult<PaginatedResponse<T>>> {
  return apiClient.get<PaginatedResponse<T>>(path, {
    page: params.page ?? 1,
    per_page: params.per_page ?? 20,
    ...params,
  })
}
