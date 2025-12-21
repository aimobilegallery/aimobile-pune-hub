import { Star } from 'lucide-react';

const GoogleRatingBadge = () => {
  return (
    <a 
      href="https://www.google.com/maps/place/Ai+Mobile+Gallery/@18.4714449,73.9032571,17z/data=!4m8!3m7!1s0x3bc2eb6dcc548005:0x1bc6c42dae29e8be!8m2!3d18.4714449!4d73.9058374!9m1!1b1!16s%2Fg%2F11ty2lkqrv"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-4 right-4 md:top-8 md:right-8 z-20 bg-card/95 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
    >
      <div className="flex items-center gap-2 md:gap-3">
        {/* Google Logo */}
        <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-lg md:text-xl font-bold text-foreground">5.0</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
          <span className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            Google Reviews
          </span>
        </div>
      </div>
    </a>
  );
};

export default GoogleRatingBadge;
