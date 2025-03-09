import { LucideIcon } from 'lucide-react';

export interface Auth {
  user: User;
}

export interface BreadcrumbItem {
  title: string;
  href: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon | null;
  isActive?: boolean;
}

export interface SharedData {
  name: string;
  quote: { message: string; author: string };
  auth: Auth;
  [key: string]: unknown;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  [key: string]: unknown; // This allows for additional properties...
}

//
export type BookCarInfo = {
  id: number;
  diem_don: string;
  diem_den: string;
  check_hai_chieu: boolean;
  check_vat: boolean;
  loai_xe: number;
  ho_ten: string;
  so_dien_thoai: string;
  thoi_gian_don: string;
  thoi_gian_cho: number;
  created_at: string;
  updated_at: string;
};
