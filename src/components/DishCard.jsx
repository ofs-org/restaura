export function DishCard({ project }) {
  return (
    <div>
      <img
        className="px-2 rounded-3xl"
        alt={project.title}
        src={project.image}
      />
      <div className="p-4">
        <h3 className="font-bold mb-2 text-2xl tracking-tighter">
          {project.title}
        </h3>
        <p className="text-balance text-sm text-white/70">
          {project.description}
        </p>
      </div>
    </div>
  );
}
