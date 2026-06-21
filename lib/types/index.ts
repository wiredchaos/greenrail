// ============================================================
// GREENRAILS — Core Type Definitions
// Database models, API types, and shared interfaces
// ============================================================

// ——————————————————————————————————————
// Identity & Access
// ——————————————————————————————————————

export type UserRole = 'super_admin' | 'admin' | 'operator' | 'merchant' | 'compliance_officer' | 'viewer'
export type UserStatus = 'active' | 'suspended' | 'pending' | 'deleted'

export interface User {
  id: string
  email: string
  name: string
  avatar_url?: string
  role: UserRole
  status: UserStatus
  location_id?: string
  created_at: string
  updated_at: string
  last_login_at?: string
}

export interface Role {
  id: string
  name: string
  description: string
  permissions: string[]
  created_at: string
}

export interface Permission {
  id: string
  key: string
  label: string
  module: string
  description: string
}

// ——————————————————————————————————————
// Products & Catalog
// ——————————————————————————————————————

export type ProductStatus = 'active' | 'inactive' | 'archived'
export type ProductType = 'physical' | 'digital' | 'service'

export interface Category {
  id: string
  name: string
  slug: string
  parent_id?: string
  description?: string
  image_url?: string
  sort_order: number
  created_at: string
}

export interface Product {
  id: string
  name: string
  slug: string
  description?: string
  category_id: string
  category?: Category
  type: ProductType
  status: ProductStatus
  price: number
  compare_price?: number
  cost?: number
  sku?: string
  barcode?: string
  image_url?: string
  images?: string[]
  tags?: string[]
  taxable: boolean
  track_inventory: boolean
  created_at: string
  updated_at: string
}

export interface InventoryItem {
  id: string
  product_id: string
  product?: Product
  location_id: string
  quantity: number
  reserved_quantity: number
  reorder_point?: number
  reorder_quantity?: number
  updated_at: string
}

// ——————————————————————————————————————
// Customers
// ——————————————————————————————————————

export type CustomerStatus = 'active' | 'inactive' | 'flagged'

export interface Customer {
  id: string
  name: string
  email?: string
  phone?: string
  address?: Address
  status: CustomerStatus
  notes?: string
  tags?: string[]
  kyc_verified: boolean
  kyc_verified_at?: string
  total_orders: number
  total_spent: number
  created_at: string
  updated_at: string
}

export interface Address {
  line1: string
  line2?: string
  city: string
  state: string
  postal_code: string
  country: string
}

// ——————————————————————————————————————
// Orders & POS
// ——————————————————————————————————————

export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'completed' | 'cancelled' | 'refunded'
export type OrderSource = 'pos' | 'online' | 'api' | 'mobile'

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  product?: Product
  name: string
  quantity: number
  unit_price: number
  discount_amount: number
  tax_amount: number
  total: number
}

export interface Order {
  id: string
  order_number: string
  customer_id?: string
  customer?: Customer
  location_id: string
  operator_id: string
  source: OrderSource
  status: OrderStatus
  items: OrderItem[]
  subtotal: number
  discount_total: number
  tax_total: number
  total: number
  notes?: string
  created_at: string
  updated_at: string
  completed_at?: string
}

// ——————————————————————————————————————
// Payments
// ——————————————————————————————————————

export type PaymentMethod = 'cash' | 'card' | 'ach' | 'crypto' | 'credits'
export type PaymentStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'refunded' | 'cancelled'
export type PaymentProvider = 'internal' | 'stripe' | 'square' | 'plaid' | 'coinbase' | 'manual'

export interface Payment {
  id: string
  order_id: string
  customer_id?: string
  method: PaymentMethod
  provider: PaymentProvider
  status: PaymentStatus
  amount: number
  currency: string
  provider_reference?: string
  metadata?: Record<string, unknown>
  processed_at?: string
  created_at: string
}

export interface Receipt {
  id: string
  order_id: string
  payment_id: string
  receipt_number: string
  format: 'digital' | 'print'
  sent_to?: string
  created_at: string
}

// ——————————————————————————————————————
// Intelligence Layer
// ——————————————————————————————————————

export type SignalCategory = 'MARKET' | 'REGULATORY' | 'COMPLIANCE' | 'RISK' | 'INDUSTRY' | 'CRYPTO' | 'MACRO'
export type SignalImpact = 'HIGH' | 'MEDIUM' | 'LOW'
export type InsightStatus = 'new' | 'reviewed' | 'acted' | 'dismissed'

export interface Signal {
  id: string
  category: SignalCategory
  label: string
  value: string
  change?: string
  direction?: 'up' | 'down' | 'neutral'
  source: string
  url?: string
  timestamp: string
  created_at: string
}

export interface Insight {
  id: string
  signal_id?: string
  signal?: Signal
  title: string
  summary: string
  category: SignalCategory
  impact: SignalImpact
  status: InsightStatus
  recommended_action?: string
  created_at: string
  expires_at?: string
}

export interface ActionRecord {
  id: string
  insight_id: string
  insight?: Insight
  user_id: string
  user?: User
  action_type: string
  description: string
  outcome?: string
  created_at: string
}

// ——————————————————————————————————————
// Content & Publishing
// ——————————————————————————————————————

export type ArticleStatus = 'draft' | 'review' | 'scheduled' | 'published' | 'archived'
export type PublishDestination = 'greenrails' | 'getmoneynews' | 'both'

export interface Author {
  id: string
  name: string
  slug: string
  bio?: string
  avatar_url?: string
  title?: string
  website?: string
  social?: Record<string, string>
  created_at: string
}

export interface Tag {
  id: string
  name: string
  slug: string
  created_at: string
}

export interface ContentCategory {
  id: string
  name: string
  slug: string
  description?: string
  created_at: string
}

export interface ArticleBlock {
  id: string
  article_id: string
  type: 'paragraph' | 'heading' | 'image' | 'quote' | 'code' | 'embed' | 'divider'
  content: string
  metadata?: Record<string, unknown>
  sort_order: number
}

export interface Article {
  id: string
  title: string
  slug: string
  excerpt?: string
  content?: string
  blocks?: ArticleBlock[]
  author_id: string
  author?: Author
  category_id?: string
  category?: ContentCategory
  tags?: Tag[]
  status: ArticleStatus
  destination: PublishDestination
  featured: boolean
  featured_image_url?: string
  seo_title?: string
  seo_description?: string
  published_at?: string
  scheduled_at?: string
  created_at: string
  updated_at: string
}

// ——————————————————————————————————————
// Media
// ——————————————————————————————————————

export type MediaType = 'image' | 'video' | 'document' | 'audio'

export interface MediaAsset {
  id: string
  filename: string
  original_filename: string
  url: string
  type: MediaType
  mime_type: string
  size_bytes: number
  width?: number
  height?: number
  alt_text?: string
  uploaded_by: string
  created_at: string
}

// ——————————————————————————————————————
// Compliance & Audit
// ——————————————————————————————————————

export type AuditAction =
  | 'user.created' | 'user.updated' | 'user.deleted' | 'user.login' | 'user.logout'
  | 'order.created' | 'order.updated' | 'order.cancelled'
  | 'payment.initiated' | 'payment.completed' | 'payment.failed' | 'payment.refunded'
  | 'product.created' | 'product.updated' | 'product.deleted'
  | 'compliance.reviewed' | 'compliance.flagged'
  | 'article.published' | 'article.unpublished'
  | 'settings.updated'
  | 'report.generated'

export interface AuditLog {
  id: string
  action: AuditAction
  entity_type: string
  entity_id: string
  user_id: string
  user?: Pick<User, 'id' | 'name' | 'email'>
  ip_address?: string
  user_agent?: string
  metadata?: Record<string, unknown>
  created_at: string
}

export interface ComplianceReport {
  id: string
  type: string
  period_start: string
  period_end: string
  status: 'pending' | 'in_review' | 'submitted' | 'approved' | 'rejected'
  submitted_by?: string
  submitted_at?: string
  notes?: string
  created_at: string
}

// ——————————————————————————————————————
// Operations
// ——————————————————————————————————————

export interface Location {
  id: string
  name: string
  address: Address
  phone?: string
  email?: string
  timezone: string
  active: boolean
  created_at: string
}

export interface Team {
  id: string
  name: string
  location_id?: string
  manager_id?: string
  members: string[]
  created_at: string
}

export type TaskStatus = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled'
export type TaskPriority = 'critical' | 'high' | 'medium' | 'low'

export interface Task {
  id: string
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  assigned_to?: string
  location_id?: string
  due_date?: string
  completed_at?: string
  created_by: string
  created_at: string
  updated_at: string
}

// ——————————————————————————————————————
// API Response wrappers
// ——————————————————————————————————————

export interface ApiResponse<T> {
  data: T
  error: null
}

export interface ApiError {
  data: null
  error: {
    code: string
    message: string
    details?: Record<string, unknown>
  }
}

export type ApiResult<T> = ApiResponse<T> | ApiError

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  per_page: number
  total_pages: number
}
