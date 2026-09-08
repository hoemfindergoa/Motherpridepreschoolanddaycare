import type { MetadataRoute } from 'next'
import { readBlog } from "@/lib/actions/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    let { data: blogs } = await readBlog();

    // Map blogs to postEntries with required properties
    const postEntries: MetadataRoute.Sitemap = (blogs || []).map((blog) => ({
        url: `${process.env.SITE_URL}/blog/${blog?.slug}`,
        lastModified: new Date(blog.created_at),
        changeFrequency: 'weekly' as const,
        priority: 0.5,
    }));

    // Static pages extracted from Next.js build routes
    const staticRoutes = [
        '',
        '/about',
        '/admission',
        '/Ourcenters',
        '/Programs',
        '/Whyus',
        '/blogs',
        '/career',
        '/contact',
        '/enroll',
        '/franchise',
        '/privacy-policy'
    ];

    const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
        url: `${process.env.SITE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
        priority: route === '' ? 1.0 : 0.8,
    }));

    // Combine static entries with postEntries
    const allEntries: MetadataRoute.Sitemap = [...staticEntries, ...postEntries];

    return allEntries;
}
