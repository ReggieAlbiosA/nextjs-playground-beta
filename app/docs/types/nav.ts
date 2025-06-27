export interface NavItem {
  title: string;
  url: string;
  icon?: string;
  description?: string;
  items?: NavItem[];
}