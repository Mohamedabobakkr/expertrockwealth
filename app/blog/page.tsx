import { Metadata } from 'next';
import { BlogHero } from '@/components/sections/blog/blog-hero';
import { BlogPosts } from '@/components/sections/blog/blog-posts';
import { BlogNewsletter } from '@/components/sections/blog/blog-newsletter';

export const metadata: Metadata = {
  title: 'UAE Business Insights Blog - Expert Rock Wealth',
  description: 'Stay updated with the latest UAE business formation news, guides, and insights. Expert advice on company setup, visas, banking, and more.',
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogPosts />
      <BlogNewsletter />
    </>
  );
}