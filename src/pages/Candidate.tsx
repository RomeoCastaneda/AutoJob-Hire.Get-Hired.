import { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

interface Certification {
  id: string;
  name: string;
  institution: string;
  year: string;
}

const Candidate = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    state: "",
    country: "",
    city: "",
    phone: "",
    email: "",
    linkedin: "",
    profiles: [] as string[],
    summary: "",
    languages: "",
  });

  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);

  const profileOptions = [
    "Business Analyst",
    "Data Analyst",
    "Project Manager",
    "Product Manager",
    "Software Developer",
    "UX/UI Designer",
    "Marketing Specialist",
    "Sales Executive",
    "HR Manager",
    "Financial Analyst",
    "Operations Manager",
    "Consultant",
  ];

  const addExperience = () => {
    setExperiences([
      ...experiences,
      { id: Date.now().toString(), title: "", company: "", startDate: "", endDate: "", description: "" },
    ]);
  };

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setExperiences(
      experiences.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const addEducation = () => {
    setEducation([
      ...education,
      { id: Date.now().toString(), degree: "", institution: "", year: "" },
    ]);
  };

  const removeEducation = (id: string) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setEducation(
      education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    );
  };

  const addCertification = () => {
    setCertifications([
      ...certifications,
      { id: Date.now().toString(), name: "", institution: "", year: "" },
    ]);
  };

  const removeCertification = (id: string) => {
    setCertifications(certifications.filter((cert) => cert.id !== id));
  };

  const updateCertification = (id: string, field: keyof Certification, value: string) => {
    setCertifications(
      certifications.map((cert) => (cert.id === id ? { ...cert, [field]: value } : cert))
    );
  };

  const toggleProfile = (profile: string) => {
    if (formData.profiles.includes(profile)) {
      setFormData({ ...formData, profiles: formData.profiles.filter((p) => p !== profile) });
    } else if (formData.profiles.length < 8) {
      setFormData({ ...formData, profiles: [...formData.profiles, profile] });
    }
  };

  const handleNext = () => {
    if (step < 9) {
      setStep(step + 1);
    } else {
      toast({
        title: "¡Perfil completado!",
        description: "Ya estamos buscando las mejores oportunidades para ti",
      });
      setStep(10);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Para Candidatos</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">GET HIRED</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Completa tu perfil profesional y conecta con las mejores oportunidades
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center gap-2 mb-12 overflow-x-auto pb-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((s) => (
              <div key={s} className={`flex items-center ${s < 9 ? 'gap-2' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                  step >= s ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                }`}>
                  {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
                </div>
                {s < 9 && <div className="w-4 h-0.5 bg-muted" />}
              </div>
            ))}
          </div>

          <Card className="glass p-8 sm:p-12">
            {/* Step 1: Nombre y Apellido */}
            {step === 1 && (
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold mb-3">Datos Básicos</h2>
                  <p className="text-muted-foreground">Comencemos con tu nombre completo</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre(s) *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Lidia"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido(s) *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Duárez Barboza"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Ubicación */}
            {step === 2 && (
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold mb-3">Ubicación</h2>
                  <p className="text-muted-foreground">¿Dónde te encuentras?</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="state">Estado/Región *</Label>
                    <Input 
                      id="state" 
                      placeholder="Lima"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">País *</Label>
                    <Input 
                      id="country" 
                      placeholder="Perú"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="city">Ciudad (Opcional)</Label>
                    <Input 
                      id="city" 
                      placeholder="Lima Metropolitana"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contacto */}
            {step === 3 && (
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold mb-3">Información de Contacto</h2>
                  <p className="text-muted-foreground">¿Cómo podemos contactarte?</p>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono *</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="992 843 369"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input 
                      id="linkedin" 
                      placeholder="linkedin.com/in/tuperfil"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Perfiles Profesionales */}
            {step === 4 && (
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold mb-3">Perfiles Profesionales</h2>
                  <p className="text-muted-foreground">Selecciona hasta 8 perfiles que te describan</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {formData.profiles.length} de 8 seleccionados
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {profileOptions.map((profile) => (
                    <button
                      key={profile}
                      onClick={() => toggleProfile(profile)}
                      disabled={!formData.profiles.includes(profile) && formData.profiles.length >= 8}
                      className={`p-4 rounded-xl text-sm font-medium transition-all ${
                        formData.profiles.includes(profile)
                          ? 'gradient-primary text-white shadow-glow'
                          : 'glass hover:bg-white/80 text-foreground'
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {profile}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Resumen Profesional */}
            {step === 5 && (
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold mb-3">Resumen de Perfil Profesional</h2>
                  <p className="text-muted-foreground">Describe tu experiencia y especialización</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="summary">Resumen Profesional *</Label>
                  <Textarea 
                    id="summary"
                    placeholder="Profesional con más de X años de experiencia en..."
                    className="min-h-[200px]"
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  />
                  <p className="text-xs text-muted-foreground">
                    Incluye tus años de experiencia, áreas de especialización y logros destacados
                  </p>
                </div>
              </div>
            )}

            {/* Step 6: Experiencia Profesional */}
            {step === 6 && (
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold mb-3">Experiencia Profesional</h2>
                  <p className="text-muted-foreground">Agrega tu historial laboral</p>
                </div>
                <div className="space-y-6">
                  {experiences.map((exp) => (
                    <Card key={exp.id} className="p-6 space-y-4 relative">
                      <button
                        onClick={() => removeExperience(exp.id)}
                        className="absolute top-4 right-4 text-destructive hover:text-destructive/80"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Título del Puesto</Label>
                          <Input
                            placeholder="Business Analyst"
                            value={exp.title}
                            onChange={(e) => updateExperience(exp.id, "title", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Empresa</Label>
                          <Input
                            placeholder="Clínica Internacional"
                            value={exp.company}
                            onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Fecha Inicio</Label>
                          <Input
                            type="month"
                            value={exp.startDate}
                            onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Fecha Fin</Label>
                          <Input
                            type="month"
                            placeholder="Presente"
                            value={exp.endDate}
                            onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Descripción y Logros</Label>
                        <Textarea
                          placeholder="• Logro 1&#10;• Logro 2&#10;• Logro 3"
                          className="min-h-[120px]"
                          value={exp.description}
                          onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                        />
                      </div>
                    </Card>
                  ))}
                  <Button
                    onClick={addExperience}
                    variant="outline"
                    className="w-full"
                  >
                    <Plus className="w-5 h-5" />
                    Agregar Experiencia
                  </Button>
                </div>
              </div>
            )}

            {/* Step 7: Educación */}
            {step === 7 && (
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold mb-3">Educación</h2>
                  <p className="text-muted-foreground">Agrega tu formación académica</p>
                </div>
                <div className="space-y-6">
                  {education.map((edu) => (
                    <Card key={edu.id} className="p-6 space-y-4 relative">
                      <button
                        onClick={() => removeEducation(edu.id)}
                        className="absolute top-4 right-4 text-destructive hover:text-destructive/80"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Grado/Título</Label>
                          <Input
                            placeholder="Licenciatura en..."
                            value={edu.degree}
                            onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Institución</Label>
                          <Input
                            placeholder="Universidad..."
                            value={edu.institution}
                            onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Año de Graduación</Label>
                          <Input
                            type="number"
                            placeholder="2020"
                            value={edu.year}
                            onChange={(e) => updateEducation(edu.id, "year", e.target.value)}
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                  <Button
                    onClick={addEducation}
                    variant="outline"
                    className="w-full"
                  >
                    <Plus className="w-5 h-5" />
                    Agregar Educación
                  </Button>
                </div>
              </div>
            )}

            {/* Step 8: Certificaciones */}
            {step === 8 && (
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold mb-3">Certificaciones y Cursos</h2>
                  <p className="text-muted-foreground">Agrega tus certificaciones relevantes</p>
                </div>
                <div className="space-y-6">
                  {certifications.map((cert) => (
                    <Card key={cert.id} className="p-6 space-y-4 relative">
                      <button
                        onClick={() => removeCertification(cert.id)}
                        className="absolute top-4 right-4 text-destructive hover:text-destructive/80"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Certificación/Curso</Label>
                          <Input
                            placeholder="Certified Scrum Master"
                            value={cert.name}
                            onChange={(e) => updateCertification(cert.id, "name", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Institución</Label>
                          <Input
                            placeholder="Scrum Alliance"
                            value={cert.institution}
                            onChange={(e) => updateCertification(cert.id, "institution", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Año</Label>
                          <Input
                            type="number"
                            placeholder="2023"
                            value={cert.year}
                            onChange={(e) => updateCertification(cert.id, "year", e.target.value)}
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                  <Button
                    onClick={addCertification}
                    variant="outline"
                    className="w-full"
                  >
                    <Plus className="w-5 h-5" />
                    Agregar Certificación
                  </Button>
                </div>
              </div>
            )}

            {/* Step 9: Idiomas */}
            {step === 9 && (
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold mb-3">Idiomas</h2>
                  <p className="text-muted-foreground">¿Qué idiomas hablas?</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="languages">Idiomas y Nivel</Label>
                  <Textarea 
                    id="languages"
                    placeholder="Español - Nativo&#10;Inglés - Avanzado&#10;Portugués - Intermedio"
                    className="min-h-[150px]"
                    value={formData.languages}
                    onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                  />
                  <p className="text-xs text-muted-foreground">
                    Indica el idioma y tu nivel (Nativo, Avanzado, Intermedio, Básico)
                  </p>
                </div>
              </div>
            )}

            {/* Step 10: Success */}
            {step === 10 && (
              <div className="text-center space-y-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto animate-glow">
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl font-bold">¡Perfil Completado!</h2>
                <p className="text-xl text-muted-foreground max-w-md mx-auto">
                  Tu perfil está activo. Las empresas empezarán a ver tu perfil y recibirás notificaciones de matches.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button variant="hero" size="lg">
                    Ver Dashboard
                  </Button>
                  <Button variant="outline" size="lg">
                    Buscar Vacantes
                  </Button>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {step < 10 && (
              <div className="flex gap-4 justify-between mt-8 pt-8 border-t">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={step === 1}
                >
                  Anterior
                </Button>
                <Button 
                  variant="hero"
                  onClick={handleNext}
                >
                  {step === 9 ? 'Finalizar' : 'Siguiente'}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            )}
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Candidate;
