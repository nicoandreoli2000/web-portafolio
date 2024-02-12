/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="p-4 pt-28 flex flex-col h-screen">
      <section
        id="about"
        className="h-screen flex flex-col items-center gap-2 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Nicolas Andreoli
        </h2>
        <p className="text-gray-500 dark:text-gray-400">Frontend Developer</p>
        <p className="mt-5 text-gray-500 text-lg dark:text-gray-400 max-w-[653px]">
          I'm a frontend developer with a focus on React. I love creating
          beautiful and performant web experiences.
        </p>
      </section>
      <section id="career" className="h-screen">
        <h2>CAREER</h2>
        <p></p>
      </section>
      <section id="contact" className="h-screen">
        <h2>CONTACT</h2>
      </section>
    </main>
  );
}
