import { cache } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

const getProduct = cache(async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) return null;
  return res.json();
});


export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    return { title: 'Nie znaleziono produktu' };
  }

  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: `/products/${resolvedParams.id}`,
    },
    openGraph: {
      type: 'website',
      title: product.title,
      description: product.description,
    },
  };
}

export async function generateStaticParams() {
  const res = await fetch('https://dummyjson.com/products?limit=10');
  const data = await res.json();
  return data.products.map((product: { id: number }) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="mt-4 text-gray-600">{product.description}</p>
      <div className="mt-4 text-xl font-semibold">Cena: ${product.price}</div>
    </div>
  );
}