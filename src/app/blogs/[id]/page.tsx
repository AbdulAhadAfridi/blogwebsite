import CommentsSection from "@/components/Commentsection";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { PageProps } from "../../../../.next/types/app/page";

type BlogDetailProps = PageProps & {
  params: { id: string };
};

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { id } = params;

  // Fetch the blog post using the `id`
  const blog = await client.fetch(
    `*[_type == "blogPost" && id == $id] { id, title, subtitle, heroImage, paragraph }`,
    { id }
  );

  if (!blog || blog.length === 0) {
    return <p>Blog not found.</p>;
  }

  const blogPost = blog[0];

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-800">
      {/* Header Section */}
      <div className="relative w-full h-72 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 sm:p-8">
  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight sm:leading-snug">
    {blogPost.title}
  </h1>
  <p className="mt-4 sm:mt-6 lg:mt-8 text-lg sm:text-xl lg:text-2xl">
    {blogPost.subtitle}
  </p>
</div>

      </div>

      {/* Blog Content */}
      <div className="max-w-5xl  mt-8 mx-auto px-8 py-12">
        <div key={blogPost.id} className="mb-16">
          {/* Blog Header */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
  <Image
    src={urlFor(blogPost.heroImage).url()}
    alt={blogPost.title}
    width={1200}
    height={800}
    className="w-full h-full object-cover rounded-lg shadow-md"
    priority={true} 
  />
</div>

          {/* Blog Content */}
          <div className="py-6 px-4 sm:py-8 sm:px-6 mt-6 sm:mt-8 max-w-7xl mx-auto">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-100">
    {blogPost.title}
  </h2>
  <p className="mt-3 text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-400">
    {blogPost.subtitle}
  </p>
  <div className="mt-5 mb-12 sm:mt-6 sm:mb-16 text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
    <p>{blogPost.paragraph}</p>
  </div>


            <CommentsSection />
          </div>
        </div>
      </div>

      {/* By default Introduction */}
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 min-h-screen">
  {/* Blog Header */}
  <div className="relative p-12 sm:p-16 lg:p-24 text-center bg-gradient-to-r from-green-500 to-blue-500 text-white">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
      The Importance of{" "}
      <span className="text-yellow-300">Education</span> and{" "}
      <span className="text-yellow-300">Skills</span>
    </h1>
    <p className="mt-4 text-base sm:text-lg md:text-xl">
      Unlocking potential through knowledge and practical expertise.
    </p>
  </div>

  {/* Blog Content */}
  <div className="max-w-3xl sm:max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Introduction</h2>
    <p className="mb-6 leading-relaxed">
      Education and skills are the cornerstones of personal and professional
      growth. They shape not only individual futures but also contribute to
      societal progress.
    </p>

    <h2 className="text-xl sm:text-2xl font-semibold mb-3">
      Why Education Matters
    </h2>
    <p className="mb-6 leading-relaxed">
      Education provides the foundation for understanding the world, fostering
      critical thinking, and enabling informed decisions. It equips individuals
      with the tools they need to excel in their personal and professional
      lives.
    </p>

    <h2 className="text-xl sm:text-2xl font-semibold mb-3">The Role of Skills</h2>
    <p className="mb-6 leading-relaxed">
      While education lays the groundwork, skills are the practical application
      of knowledge. They allow individuals to adapt to changing environments,
      solve real-world problems, and remain competitive in the job market.
    </p>

    <h2 className="text-xl sm:text-2xl font-semibold mb-3">
      The Synergy Between Education and Skills
    </h2>
    <p className="mb-6 leading-relaxed">
      A balanced combination of education and skills ensures holistic
      development. Together, they empower individuals to innovate, lead, and
      succeed in their chosen fields.
    </p>

    <h2 className="text-xl sm:text-2xl font-semibold mb-3">Conclusion</h2>
    <p className="mb-6 leading-relaxed">
      Investing in education and skill-building is crucial for unlocking
      potential and achieving sustainable success. It is not just about acquiring
      knowledge but also about applying it effectively to create meaningful
      impact.
    </p>

    {/* Call to Action */}
    <div className="mt-8 text-center">
      <Link href="/blogs">
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-300 text-blue-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition-all">
          Read More Blogs
        </button>
      </Link>
    </div>
  </div>
</div>

      </div>
   
  );
}
