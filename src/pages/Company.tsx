import { useState } from "react";
import { Briefcase, Plus, Search, Users, Target, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

const Company = () => {
  const [view, setView] = useState<"dashboard" | "create" | "search" | "matches">("dashboard");
  const [vacancyData, setVacancyData] = useState({
    title: "",
    department: "",
    location: "",
    type: "",
    description: "",
    skills: "",
    experience: "",
    salary: "",
  });

  const mockMatches = [
    { name: "María González", role: "Frontend Developer", match: 98, skills: ["React", "TypeScript", "Tailwind"] },
    { name: "Carlos Ramírez", role: "Backend Engineer", match: 95, skills: ["Node.js", "PostgreSQL", "AWS"] },
    { name: "Ana Martínez", role: "Full Stack Developer", match: 92, skills: ["React", "Node.js", "MongoDB"] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Dashboard View */}
          {view === "dashboard" && (
            <>
              {/* Header */}
              <div className="mb-12 animate-slide-up">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div>
                    <h1 className="text-4xl sm:text-5xl font-black mb-2">
                      <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Panel de Empresa</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      Gestiona vacantes y encuentra el talento perfecto
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="glass" size="lg" onClick={() => setView("search")}>
                      <Search className="w-5 h-5" />
                      Buscar Candidatos
                    </Button>
                    <Button variant="hero" size="lg" onClick={() => setView("create")}>
                      <Plus className="w-5 h-5" />
                      Nueva Vacante
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card className="glass p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <Briefcase className="w-8 h-8 text-primary" />
                    <Badge variant="secondary" className="bg-primary/20 text-primary">+3</Badge>
                  </div>
                  <p className="text-3xl font-bold mb-1">12</p>
                  <p className="text-sm text-muted-foreground">Vacantes Activas</p>
                </Card>
                <Card className="glass p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <Users className="w-8 h-8 text-secondary" />
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary">+28</Badge>
                  </div>
                  <p className="text-3xl font-bold mb-1">156</p>
                  <p className="text-sm text-muted-foreground">Candidatos Nuevos</p>
                </Card>
                <Card className="glass p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <Target className="w-8 h-8 text-accent" />
                    <Badge variant="secondary" className="bg-accent/20 text-accent">98%</Badge>
                  </div>
                  <p className="text-3xl font-bold mb-1">24</p>
                  <p className="text-sm text-muted-foreground">Best Matches</p>
                </Card>
                <Card className="glass p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    <Badge variant="secondary" className="bg-primary/20 text-primary">+12%</Badge>
                  </div>
                  <p className="text-3xl font-bold mb-1">8</p>
                  <p className="text-sm text-muted-foreground">Contrataciones</p>
                </Card>
              </div>

              {/* Best Matches */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Best Matches para tus Vacantes</h2>
                  <Button variant="ghost">Ver Todos</Button>
                </div>
                <div className="grid gap-4">
                  {mockMatches.map((match, index) => (
                    <Card key={index} className="glass p-6 hover-lift">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold">{match.name}</h3>
                              <p className="text-muted-foreground">{match.role}</p>
                            </div>
                            <Badge className="gradient-primary text-white">
                              {match.match}% Match
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {match.skills.map((skill, idx) => (
                              <Badge key={idx} variant="secondary" className="bg-muted">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Button variant="outline">Ver Perfil</Button>
                          <Button variant="default">Contactar</Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Create Vacancy View */}
          {view === "create" && (
            <Card className="glass p-8 sm:p-12 max-w-3xl mx-auto">
              <div className="space-y-8">
                <div>
                  <Button variant="ghost" onClick={() => setView("dashboard")} className="mb-4">
                    ← Volver
                  </Button>
                  <h2 className="text-3xl font-bold mb-3">Nueva Vacante</h2>
                  <p className="text-muted-foreground">
                    Describe la posición y nuestra IA encontrará los mejores candidatos
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Título de la Posición</Label>
                    <Input id="job-title" placeholder="Ej: Desarrollador Full Stack Senior" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Departamento</Label>
                    <Input id="department" placeholder="Ej: Tecnología" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="location">Ubicación</Label>
                      <Input id="location" placeholder="Ciudad de México" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Tipo de Contrato</Label>
                      <Input id="type" placeholder="Tiempo Completo" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe las responsabilidades y requisitos..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills Requeridas</Label>
                    <Input id="skills" placeholder="React, TypeScript, Node.js..." />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="experience">Años de Experiencia</Label>
                      <Input id="experience" type="number" placeholder="3" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salary">Rango Salarial</Label>
                      <Input id="salary" placeholder="$50,000 - $70,000" />
                    </div>
                  </div>

                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    onClick={() => {
                      // Simular publicación y búsqueda de candidatos
                      setView("matches");
                    }}
                  >
                    <Target className="w-5 h-5" />
                    Publicar y Encontrar Candidatos
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Matches View - After Publishing */}
          {view === "matches" && (
            <div className="space-y-8">
              <Card className="glass-dark p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 animate-glow">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-3">¡Vacante Publicada!</h2>
                <p className="text-muted-foreground mb-2">
                  Nuestra IA ha analizado tu vacante y encontró estos candidatos perfectos
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Los candidatos con mayor match aparecen primero
                </p>
                <Button variant="ghost" onClick={() => setView("dashboard")}>
                  ← Volver al Dashboard
                </Button>
              </Card>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Top Matches para tu Vacante</h2>
                  <Badge className="gradient-primary text-white text-lg px-4 py-2">
                    {mockMatches.length} Candidatos Encontrados
                  </Badge>
                </div>
                <div className="grid gap-4">
                  {mockMatches.map((match, index) => (
                    <Card key={index} className="glass p-6 hover-lift">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold">{match.name}</h3>
                              <p className="text-muted-foreground">{match.role}</p>
                            </div>
                            <Badge className="gradient-primary text-white text-base px-3 py-1">
                              {match.match}% Match
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {match.skills.map((skill, idx) => (
                              <Badge key={idx} variant="secondary" className="bg-muted">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Button variant="outline">Ver Perfil Completo</Button>
                          <Button variant="hero">Agregar a Vacante</Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Search View */}
          {view === "search" && (
            <div className="space-y-8">
              <div>
                <Button variant="ghost" onClick={() => setView("dashboard")} className="mb-4">
                  ← Volver
                </Button>
                <h2 className="text-3xl font-bold mb-3">Buscar Candidatos</h2>
                <p className="text-muted-foreground">
                  Encuentra candidatos manualmente por skills, experiencia y ubicación
                </p>
              </div>

              <Card className="glass p-6">
                <div className="flex gap-4">
                  <Input 
                    placeholder="Buscar por skills, título, ubicación..." 
                    className="flex-1"
                  />
                  <Button variant="default" size="lg">
                    <Search className="w-5 h-5" />
                    Buscar
                  </Button>
                </div>
              </Card>

              <div className="grid gap-4">
                {mockMatches.map((match, index) => (
                  <Card key={index} className="glass p-6 hover-lift">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{match.name}</h3>
                        <p className="text-muted-foreground mb-3">{match.role}</p>
                        <div className="flex flex-wrap gap-2">
                          {match.skills.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-muted">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline">Ver Perfil</Button>
                        <Button variant="default">Contactar</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Company;
