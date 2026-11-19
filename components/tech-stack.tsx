import { techStack } from "@/content/site";

export function TechStack() {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {techStack.map((name) => (
        <li key={name} className="rounded-lg bg-midnight px-3 py-2 text-xs text-cloud sm:text-sm">
          {name}
        </li>
      ))}
    </ul>
  );
}
