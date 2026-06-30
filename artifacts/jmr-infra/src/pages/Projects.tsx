import { Layout } from "../components/layout/Layout";
import { projects } from "../data";
import { Link } from "wouter";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "All" || project.type === typeFilter;
    const matchesStatus = statusFilter === "All" || project.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <Layout>
      <div className="bg-primary pt-24 pb-12">
        <div className="container px-4 mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-white/80 max-w-2xl">Discover our portfolio of premium open plots and luxury apartments in and around Vijayawada.</p>
        </div>
      </div>
      
      <section className="py-12 bg-background min-h-[500px]">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-10 p-6 bg-card rounded-xl shadow-sm border border-border">
            <div className="flex-1">
              <Input 
                placeholder="Search by project name or location..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-background"
              />
            </div>
            <div className="w-full md:w-56">
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Types</SelectItem>
                  <SelectItem value="Open Plot">Open Plot</SelectItem>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="Villa">Villa</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-56">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Status</SelectItem>
                  <SelectItem value="Available">Available</SelectItem>
                  <SelectItem value="Ongoing">Ongoing</SelectItem>
                  <SelectItem value="Sold Out">Sold Out</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-card rounded-xl border border-dashed border-border">
              <h3 className="text-xl font-bold text-primary mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group bg-card rounded-xl overflow-hidden shadow border border-border flex flex-col transition-all hover:shadow-xl hover:border-accent">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow">
                      {project.status}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3 inline-block px-3 py-1 bg-secondary rounded text-xs font-bold text-primary w-fit border border-border">
                      {project.type}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{project.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex items-start gap-1">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> {project.location}
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-border flex justify-between items-end">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">{project.type === "Open Plot" ? "Sizes" : "Configurations"}</div>
                        <div className="font-bold text-sm text-primary">{project.plotSizes}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground mb-1">Starting from</div>
                        <div className="font-serif text-lg font-bold text-accent">{project.startingPrice}</div>
                      </div>
                    </div>
                    
                    <Link href={`/projects/${project.id}`} className="mt-6 w-full inline-flex h-12 items-center justify-center rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                      View Full Details
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
