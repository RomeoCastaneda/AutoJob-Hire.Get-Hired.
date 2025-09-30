import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => navigate("/")}
            className="text-2xl sm:text-3xl font-black tracking-tight hover:scale-105 transition-transform"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AUTO</span>
            <span className="text-primary">JOB</span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {isHome && (
              <>
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Características
                </button>
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Cómo Funciona
                </button>
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Precios
                </button>
              </>
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            {isHome ? (
              <>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigate("/candidate")}
                  className="hidden sm:flex"
                >
                  Candidatos
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  onClick={() => navigate("/company")}
                >
                  Empresas
                </Button>
              </>
            ) : (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/")}
              >
                Inicio
              </Button>
            )}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
