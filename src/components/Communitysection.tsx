import { FaChalkboardTeacher, FaBookOpen, FaUserFriends } from 'react-icons/fa';

export default function CommunitySection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 mt-20 mb-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-800 dark:text-gray-100">
            Join Our Education and Skills Community
          </h2>
          <p className="mt-4 text-lg">
            Connect with like-minded individuals, share knowledge, and enhance your personal growth journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-[1.05] duration-500 hover:cursor-pointer">
            <FaChalkboardTeacher className="text-yellow-300 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold">Skill-Sharing Forms</h3>
            <p className="mt-3">
              Engage in discussions, ask questions, and share expertise to build collective knowledge.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-[1.05] duration-500 hover:cursor-pointer">
            <FaBookOpen className="text-yellow-300 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold">Educational Resources</h3>
            <p className="mt-3">
              Access curated guides, tutorials, and resources to enhance your skills and learning.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-[1.05] duration-500 hover:cursor-pointer">
            <FaUserFriends className="text-yellow-300 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold">Networking Opportunities</h3>
            <p className="mt-3">
              Connect with educators, professionals, and learners to grow your personal network.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
}
