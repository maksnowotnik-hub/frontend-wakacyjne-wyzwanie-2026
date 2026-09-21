import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://twoj-katalog.pl';

  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  const products = data.products;

  const productUrls = products.map((product: { id: number }) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
    },
    ...productUrls,
  ];
}