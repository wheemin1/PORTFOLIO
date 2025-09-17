import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { defaultPortfolioData } from "@shared/portfolio-data";

export async function registerRoutes(app: Express): Promise<Server> {
  // Portfolio data API
  app.get('/api/portfolio', (req, res) => {
    res.json(defaultPortfolioData);
  });
  
  app.get('/api/portfolio/:section', (req, res) => {
    const { section } = req.params;
    
    switch (section) {
      case 'personal':
        res.json(defaultPortfolioData.personalInfo);
        break;
      case 'education':
        res.json(defaultPortfolioData.education);
        break;
      case 'experience':
        res.json(defaultPortfolioData.experience);
        break;
      case 'projects':
        res.json(defaultPortfolioData.projects);
        break;
      case 'tools':
        res.json(defaultPortfolioData.tools);
        break;
      default:
        res.status(404).json({ error: 'Section not found' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
