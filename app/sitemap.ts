import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  }> = [
    { path: '/',                          priority: 1.0, changeFrequency: 'weekly' },
    { path: '/products/new-pallets',      priority: 0.9, changeFrequency: 'weekly' },
    { path: '/products/used-pallets',     priority: 0.9, changeFrequency: 'weekly' },
    { path: '/services/delivery',         priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/pickup',           priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/custom-orders',    priority: 0.8, changeFrequency: 'monthly' },
    { path: '/quote',                     priority: 0.9, changeFrequency: 'monthly' },
    { path: '/contact',                   priority: 0.7, changeFrequency: 'monthly' },
    { path: '/faq',                       priority: 0.7, changeFrequency: 'monthly' },
    { path: '/about',                     priority: 0.6, changeFrequency: 'monthly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
