import Image from "next/image";

export const projects = async () => {
  const reponse = await fetch("http://localhost:3000/api");
  const { projects } = await reponse.json();
  console.log(projects);

  interface Project {
    id: number;
    name: string;
    description: string;
    build_with: string[];
    created_on: string;
    repo_url: "";
    demo_url: "";
    image_url: { src: string }[];
  }

  return (
    <section className="">
      <h3>✨ New products released!</h3>
      <div className="">
        {/* {projects?.map((project: Project) => {
          const imageSrc = project.image_url[0].src;
          return (
            <article key={project.id}>
              <p>{project.name}</p>
              <Image src="" fill alt={project.name} loading="eager" />
            </article>
          );
        })} */}
      </div>
    </section>
  );
};
