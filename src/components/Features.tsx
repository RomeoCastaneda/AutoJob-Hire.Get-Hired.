import { Brain, Zap, Shield, Target, Users, TrendingUp } from "lucide-react";
import aiMatch from "@/assets/ai-match.jpg";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Matching",
      description: "Algoritmo inteligente que encuentra los mejores candidatos automáticamente",
      color: "text-primary",
    },
    {
      icon: Zap,
      title: "Instantáneo",
      description: "Resultados en segundos, no en días",
      color: "text-secondary",
    },
    {
      icon: Shield,
      title: "Seguro",
      description: "Tus datos protegidos con los más altos estándares",
      color: "text-accent",
    },
    {
      icon: Target,
      title: "Precisión",
      description: "98% de precisión en el matching de perfiles",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Colaborativo",
      description: "Gestión de equipo y permisos avanzados",
      color: "text-secondary",
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Métricas en tiempo real del proceso de contratación",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-glow opacity-50" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Tecnología que <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Transforma</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Conectamos talento con oportunidades usando IA de última generación
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 hover-lift transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* AI Visualization */}
        <div className="glass rounded-3xl p-8 lg:p-12 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">
                Matching Inteligente <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">con IA</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestro algoritmo de inteligencia artificial analiza cientos de puntos de datos para encontrar el match perfecto entre candidatos y vacantes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-muted-foreground">Análisis de skills y experiencia</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <p className="text-muted-foreground">Predicción de compatibilidad cultural</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <p className="text-muted-foreground">Aprendizaje continuo y mejora</p>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src={aiMatch} 
                alt="AI matching visualization" 
                className="rounded-2xl shadow-float w-full h-auto animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
