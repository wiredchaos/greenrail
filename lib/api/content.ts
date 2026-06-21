import { apiClient, listResource, type ListParams } from './client'
import type { Article, Author, Tag, ContentCategory, MediaAsset, ApiResult, PaginatedResponse } from '@/lib/types'

export const contentApi = {
  // Articles
  listArticles(params?: ListParams): Promise<ApiResult<PaginatedResponse<Article>>> {
    return listResource<Article>('/content/articles', params)
  },

  getArticle(id: string): Promise<ApiResult<Article>> {
    return apiClient.get<Article>(`/content/articles/${id}`)
  },

  getArticleBySlug(slug: string): Promise<ApiResult<Article>> {
    return apiClient.get<Article>(`/content/articles/slug/${slug}`)
  },

  createArticle(data: Omit<Article, 'id' | 'created_at' | 'updated_at'>): Promise<ApiResult<Article>> {
    return apiClient.post<Article>('/content/articles', data)
  },

  updateArticle(id: string, data: Partial<Article>): Promise<ApiResult<Article>> {
    return apiClient.patch<Article>(`/content/articles/${id}`, data)
  },

  publishArticle(id: string, destination: Article['destination']): Promise<ApiResult<Article>> {
    return apiClient.patch<Article>(`/content/articles/${id}/publish`, { destination })
  },

  scheduleArticle(id: string, scheduled_at: string): Promise<ApiResult<Article>> {
    return apiClient.patch<Article>(`/content/articles/${id}/schedule`, { scheduled_at })
  },

  unpublishArticle(id: string): Promise<ApiResult<Article>> {
    return apiClient.patch<Article>(`/content/articles/${id}/unpublish`, {})
  },

  deleteArticle(id: string): Promise<ApiResult<void>> {
    return apiClient.delete(`/content/articles/${id}`)
  },

  // Authors
  listAuthors(params?: ListParams): Promise<ApiResult<PaginatedResponse<Author>>> {
    return listResource<Author>('/content/authors', params)
  },

  getAuthor(id: string): Promise<ApiResult<Author>> {
    return apiClient.get<Author>(`/content/authors/${id}`)
  },

  // Tags
  listTags(params?: ListParams): Promise<ApiResult<PaginatedResponse<Tag>>> {
    return listResource<Tag>('/content/tags', params)
  },

  // Categories
  listCategories(params?: ListParams): Promise<ApiResult<PaginatedResponse<ContentCategory>>> {
    return listResource<ContentCategory>('/content/categories', params)
  },

  // Media
  listMedia(params?: ListParams): Promise<ApiResult<PaginatedResponse<MediaAsset>>> {
    return listResource<MediaAsset>('/content/media', params)
  },

  uploadMedia(file: File): Promise<ApiResult<MediaAsset>> {
    const formData = new FormData()
    formData.append('file', file)
    return apiClient.post<MediaAsset>('/content/media', formData)
  },

  deleteMedia(id: string): Promise<ApiResult<void>> {
    return apiClient.delete(`/content/media/${id}`)
  },
}
