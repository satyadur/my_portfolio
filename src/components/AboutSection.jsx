import { Briefcase, Code, Smartphone } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  <div className="space-y-6">
    <h3 className="text-2xl font-semibold">
      MERN & Java Full Stack Developer | React Native Enthusiast
    </h3>

    <p className="text-muted-foreground">
      I'm a passionate full stack developer with 1 year of experience working with the MERN stack (MongoDB, Express.js, React.js, TypeScript, Node.js) and strong knowledge of Java Full Stack development.
    </p>

    <p className="text-muted-foreground">
      I also build cross-platform mobile apps using React Native, focusing on clean architecture, smooth UI, and efficient performance.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
      <a href="#contact" className="cosmic-button">
        Get In Touch
      </a>

      <a
        href="/resume new experience (1).pdf"
        target="_blank"
        download
        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
      >
        Download CV
      </a>
    </div>
  </div>

  <div className="grid grid-cols-1 gap-6">
    <div className="gradient-border p-6 card-hover">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Code className="h-6 w-6 text-primary" />
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-lg">Web Development</h4>
          <p className="text-muted-foreground">
            Creating responsive websites and full-stack applications using modern JavaScript and Java frameworks.
          </p>
        </div>
      </div>
    </div>

    <div className="gradient-border p-6 card-hover">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Smartphone className="h-6 w-6 text-primary" />
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-lg">Mobile Development</h4>
          <p className="text-muted-foreground">
            Building fast, native-like mobile apps using React Native for both Android and iOS platforms.
          </p>
        </div>
      </div>
    </div>

    <div className="gradient-border p-6 card-hover">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Briefcase className="h-6 w-6 text-primary" />
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-lg">Project Management</h4>
          <p className="text-muted-foreground">
            Managing projects using agile methods and delivering scalable, maintainable codebases from start to finish.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};
