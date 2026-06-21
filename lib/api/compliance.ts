import { apiClient, listResource, type ListParams } from './client'
import type { AuditLog, ComplianceReport, ApiResult, PaginatedResponse } from '@/lib/types'

export const complianceApi = {
  // Audit logs
  listAuditLogs(params?: ListParams): Promise<ApiResult<PaginatedResponse<AuditLog>>> {
    return listResource<AuditLog>('/compliance/audit-logs', params)
  },

  getAuditLog(id: string): Promise<ApiResult<AuditLog>> {
    return apiClient.get<AuditLog>(`/compliance/audit-logs/${id}`)
  },

  // Reports
  listReports(params?: ListParams): Promise<ApiResult<PaginatedResponse<ComplianceReport>>> {
    return listResource<ComplianceReport>('/compliance/reports', params)
  },

  getReport(id: string): Promise<ApiResult<ComplianceReport>> {
    return apiClient.get<ComplianceReport>(`/compliance/reports/${id}`)
  },

  createReport(data: Omit<ComplianceReport, 'id' | 'created_at'>): Promise<ApiResult<ComplianceReport>> {
    return apiClient.post<ComplianceReport>('/compliance/reports', data)
  },

  submitReport(id: string): Promise<ApiResult<ComplianceReport>> {
    return apiClient.patch<ComplianceReport>(`/compliance/reports/${id}/submit`, {})
  },

  // Regulatory events
  listRegulatoryEvents(params?: ListParams): Promise<ApiResult<PaginatedResponse<{ id: string; title: string; effective_date: string; jurisdiction: string; description: string; impact: string }>>> {
    return listResource('/compliance/regulatory-events', params)
  },
}
