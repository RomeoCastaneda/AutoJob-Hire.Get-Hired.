import { ArrowRight, Upload, Briefcase, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="AI recruitment platform background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 gradient-glow" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-5xl mx-auto space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium animate-glow">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Powered by AI Matching</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-none">
            <span className="text-gradient">HIRE.</span>
            <br />
            <span className="text-gradient">GET HIRED.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto font-light">
            La plataforma de reclutamiento inteligente que conecta talento con oportunidades{" "}
            <span className="text-primary font-semibold">automáticamente</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => navigate("/candidate")}
              className="group min-w-[240px]"
            >
              <Upload className="w-5 h-5" />
              Soy Candidato
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => navigate("/company")}
              className="group min-w-[240px]"
            >
              <Briefcase className="w-5 h-5" />
              Soy Empresa
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="glass-dark rounded-2xl p-6 hover-lift">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-primary animate-glow" />
                <p className="text-4xl font-bold text-gradient">98%</p>
              </div>
              <p className="text-sm text-muted-foreground">Match Accuracy</p>
            </div>
            <div className="glass-dark rounded-2xl p-6 hover-lift" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-secondary animate-glow" />
                <p className="text-4xl font-bold text-gradient">10x</p>
              </div>
              <p className="text-sm text-muted-foreground">Más Rápido</p>
            </div>
            <div className="glass-dark rounded-2xl p-6 hover-lift" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-accent animate-glow" />
                <p className="text-4xl font-bold text-gradient">24/7</p>
              </div>
              <p className="text-sm text-muted-foreground">Disponibilidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
