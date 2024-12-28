import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import CommentsSection from '@/components/Commentsection';

// interface BlogPost {
//     id: number;
//     title: string;
//     description: string;
//     image: string;
//     category: string;
//     date: string;
// }

// const blogPosts: BlogPost[] = [
//     {
//         id: 1,
//         title: 'Mastering Time Management for Success',
//         description: 'Learn practical strategies to boost productivity and achieve your goals.',
//         image: '/pizza.jpg',
//         category: 'Productivity',
//         date: 'Dec 20, 2024',
//     },
//     {
//         id: 2,
//         title: 'Top 10 Online Learning Platforms in 2024',
//         description: 'Discover the best platforms to learn new skills from the comfort of your home.',
//         image: '/images/online-learning.jpg',
//         category: 'Education',
//         date: 'Dec 18, 2024',
//     },
//     {
//         id: 7,
//         title: 'How to Ace Your Next Job Interview',
//         subtitle: 'Proven tips and techniques to stand out and land your dream job.',
//         image: '/images/job-interview.jpg',
//         category: 'Career',
//         date: 'Dec 15, 2024',
//     },
//     {
//         id: 9,
//         title: 'Building a Growth Mindset',
//         subtitle: 'Unlock your potential by cultivating a mindset focused on continuous improvement.',
//         image: '/images/growth-mindset.jpg',
//         category: 'Personal Development',
//         date: 'Dec 12, 2024',
//     },
//     {
//         id: 12,
//         title: 'The Future of Work: Key Trends for 2024',
//         subtitle: 'Explore how technology is reshaping the workplace and what it means for you.',
//         image: '/images/future-of-work.jpg',
//         category: 'Technology',
//         date: 'Dec 10, 2024',
//     },
//     {
//         id: 4,
//         title: 'Effective Communication Skills for Leaders',
//        subtitle: 'Learn how to inspire and lead with confidence through better communication.',
//         image: '/images/communication-skills.jpg',
//         category: 'Leadership',
//         date: 'Dec 8, 2024',
//     },
//     {
//         id: 7,
//         title: 'The Ultimate Guide to Financial Freedom',
//          subtitle: 'Take control of your finances and build a secure future with these actionable tips.',
//         image: '/images/financial-freedom.jpg',
//         category: 'Finance',
//         date: 'Dec 5, 2024',
//     },
//     {
//         id: 8,
//         title: 'How to Stay Healthy While Working Remotely',
//         subtitle: 'Maintain your physical and mental well-being while working from home.',
//         image: '/images/remote-work-health.jpg',
//         category: 'Health',
//         date: 'Dec 2, 2024',
//     },
//     {
//         id: 10,
//         title: 'The Role of AI in Education: Opportunities and Challenges',
//        subtitle: 'Discover how AI is transforming learning experiences across the globe.',
//         image: '/images/ai-education.jpg',
//         category: 'Technology skill',
//         date: 'Nov 30, 2024',
//     },
//     {
//         id: 10,
//         title: 'Essential Tips for Starting Your Own Business',
//         subtitle: 'Turn your ideas into reality with these essential steps for new entrepreneurs.',
//         image: '/images/start-business.jpg',
//         category: 'Entrepreneurship',
//         date: 'Nov 28, 2024',
//     },
// {
//   id: 11,
//   title: 'Exploring Sustainable Living Practices',
//   description: 'Practical steps to reduce your environmental impact and embrace a sustainable lifestyle.',
//   image: '/images/sustainable-living.jpg',
//   category: 'Environment',
//   date: 'Dec 22, 2024',
//   author: 'Sarah Johnson',
//   views: 3500
// },
// {
//   id: 12,
//   title: 'Mastering the Art of Public Speaking',
//   subtitle: 'Overcome your fear and deliver powerful speeches with confidence and clarity.',
//   image: '/images/public-speaking.jpg',
//   category: 'Communication',
//   date: 'Dec 18, 2024',
  // location: 'New York, USA',
//   attendees: 500
// }

// ];

export default async function Blogs() {

  const data = await client.fetch(`*[_type == "blogpage"] {
  id,
  title, 
  description,
  image, 
  category,
  date, 
}`)

    return (
        <>

<div className="p-6 ">
<div className="text-center max-w-3xl mx-auto my-8">
  <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white tracking-tight sm:text-5xl">
    Our Blogs
  </h2>
  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
    Stay updated with the latest trends, insights, and tips in education and skill development.
  </p>
</div>


<ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">  
    {data.map((blog:any) => (
        <li 
            key={blog.id}
            className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transform hover:scale-[1.05] duration-500"
        >
            <Link href={`/blogs/${blog.id}`} className="">
            <Image
                src={urlFor(blog.image).url()}
                alt={blog.title}
                width={500}
                height={500}
                className="w-full h-100 object-cover rounded-t-lg"
            />
            <div className="p-4">
                <p className="text-sm text-blue-500">{blog.category}</p>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                   
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{blog.description}</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{blog.date}</p>
            </div>
            </Link>
        </li>
    ))}
</ul>
</div>

{/* Comments Section */}
<div className="p-6 bg-gray-200 dark:bg-gray-800 mb-20">
  <h3 className="text-2xl font-bold text-center mb-6 text-gray-700 dark:text-gray-300">
    Leave a Comment
  </h3>
  <CommentsSection />
  
</div>

    

    </>
    )
};











