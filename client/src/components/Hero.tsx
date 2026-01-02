import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_background_illustration_0df6aade.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      
      <div className="relative z-10 text-center px-4 py-32 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2">
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary" data-testid="text-tagline">Share Your Memories</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" data-testid="text-hero-title">
          <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
            Your Anime Art
          </span>
          <br />
          <span className="text-foreground">Collection</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-hero-description">
          展示您最喜愛的二次元作品，與世界分享您的創意和靈感
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" className="rounded-full text-base px-8 py-6 backdrop-blur-md bg-background/50" data-testid="button-hero-explore">
            探索畫廊
          </Button>
        </div>
      </div>
    </section>
  );
}
