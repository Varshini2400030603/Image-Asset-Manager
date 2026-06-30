import { Layout } from "../components/layout/Layout";
import { projects } from "../data";
import { Link } from "wouter";
import { MapPin } from "lucide-react";

export default function CompletedProjects() {
  const completedProjects = projects.filter(p => p.status === "Sold Out");

  return (
    <Layout>
      <div className="bg-primary pt-24 pb-12">
        <div className="container px-4 mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Completed Projects</h1>
          <p className="text-white/80 max-w-2xl">Explore our track record of successful deliveries and satisfied families.</p>
        </div>
      </div>
      
      <section className="py-16 bg-background min-h-[50vh]">
        <div className="container px-4 mx-auto">
          {completedProjects.length === 0 ? (
            <div className="text-center py-20 bg-card rounded-xl border border-dashed border-border">
              <h3 className="text-xl font-bold text-primary mb-2">No completed projects to display yet.</h3>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {completedProjects.map((project) => (
                <div key={project.id} className="group bg-card rounded-xl overflow-hidden shadow border border-border flex flex-col">
                  <div className="aspect-[4/3] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-muted-foreground shadow">
                      Successfully Delivered
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">{project.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex items-start gap-1">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> {project.location}
                    </p>
                    <Link href={`/projects/${project.id}`} className="mt-auto inline-flex h-10 items-center justify-center rounded bg-secondary px-4 text-sm font-medium text-primary hover:bg-secondary/80 transition-colors">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
