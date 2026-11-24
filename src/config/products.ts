export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  documentationPath: string;
  status: 'development' | 'released';
  icon: string;
  productUrl?: string;
}

export const products: Product[] = [
  {
    id: 'formops',
    name: 'FormOps',
    description: 'Reusable form component management for Jira Service Management.',
    category: 'Atlassian Marketplace',
    documentationPath: '/products/formops/',
    status: 'development',
    icon: 'F',
  },
];
