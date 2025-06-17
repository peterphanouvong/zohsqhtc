export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center px-6 py-24">
      <h1 className="text-5xl font-extrabold text-white mb-8">Welcome to Taskify</h1>
      <p className="text-white text-lg max-w-xl text-center mb-12">
        Taskify helps you manage your daily tasks efficiently and effortlessly.
      </p>
      <section className="max-w-4xl w-full bg-white/20 backdrop-blur-md rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-4">Features</h2>
        <ul className="list-disc list-inside text-white space-y-2">
          <li>Easy task creation and management</li>
          <li>Mark tasks as complete and track progress</li>
          <li>Secure and seamless user authentication with Kinde</li>
          <li>Responsive design for desktop and mobile</li>
        </ul>
      </section>
    </main>
  );
}
