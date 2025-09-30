import { useState } from "react";
import { Upload, FileText, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const Candidate = () => {
  const [step, setStep] = useState(1);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploading(true);
      // Simulate upload
      setTimeout(() => {
        setUploading(false);
        setStep(2);
        toast({
          title: "CV procesado con éxito",
          description: "Tu perfil está siendo analizado por nuestra IA",
        });
      }, 2000);
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
              Sube tu CV y deja que nuestra IA lo envíe automáticamente a las empresas perfectas para ti
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center gap-4 mb-12">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-white' : 'bg-muted'}`}>
                {step > 1 ? <CheckCircle2 className="w-5 h-5" /> : '1'}
              </div>
              <span className="hidden sm:inline text-sm font-medium">Subir CV</span>
            </div>
            <div className="w-12 h-0.5 bg-muted self-center" />
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-white' : 'bg-muted'}`}>
                {step > 2 ? <CheckCircle2 className="w-5 h-5" /> : '2'}
              </div>
              <span className="hidden sm:inline text-sm font-medium">Completar Perfil</span>
            </div>
            <div className="w-12 h-0.5 bg-muted self-center" />
            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary text-white' : 'bg-muted'}`}>
                3
              </div>
              <span className="hidden sm:inline text-sm font-medium">Recibir Ofertas</span>
            </div>
          </div>

          {/* Step 1: Upload CV */}
          {step === 1 && (
            <Card className="glass p-8 sm:p-12 hover-lift">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
                    <Upload className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-3">Sube tu CV</h2>
                  <p className="text-muted-foreground">
                    Nuestra IA procesará tu CV y creará tu perfil automáticamente
                  </p>
                </div>

                <div className="border-2 border-dashed border-primary/30 rounded-2xl p-12 text-center hover:border-primary/60 transition-colors cursor-pointer">
                  <input
                    type="file"
                    id="cv-upload"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    disabled={uploading}
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer">
                    <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold mb-2">
                      {uploading ? 'Procesando...' : 'Haz click para subir'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      PDF, DOC, DOCX (Max. 5MB)
                    </p>
                  </label>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <p>O completa tu perfil manualmente</p>
                  <Button variant="link" onClick={() => setStep(2)} className="text-primary">
                    Llenar formulario <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Step 2: Profile Form */}
          {step === 2 && (
            <Card className="glass p-8 sm:p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-3">Completa tu Perfil</h2>
                  <p className="text-muted-foreground">
                    Solo algunos datos más para encontrar las mejores oportunidades
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo</Label>
                      <Input id="name" placeholder="Juan Pérez" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="juan@ejemplo.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Título Profesional</Label>
                    <Input id="title" placeholder="Desarrollador Full Stack" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Años de Experiencia</Label>
                    <Input id="experience" type="number" placeholder="5" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Habilidades Principales</Label>
                    <Input id="skills" placeholder="React, Node.js, TypeScript..." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Ubicación</Label>
                    <Input id="location" placeholder="Ciudad de México" />
                  </div>

                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    onClick={() => {
                      setStep(3);
                      toast({
                        title: "¡Perfil completado!",
                        description: "Ya estamos buscando las mejores oportunidades para ti",
                      });
                    }}
                  >
                    Finalizar y Buscar Ofertas
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <Card className="glass p-8 sm:p-12 text-center">
              <div className="space-y-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto animate-glow">
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl font-bold">¡Todo Listo!</h2>
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
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Candidate;
