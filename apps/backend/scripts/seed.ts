import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import Admin from '../src/models/Admin.ts';
import Project from '../src/models/Project.ts';
import Blog from '../src/models/Blog.ts';

dotenv.config();

const SEED_ADMIN = {
  username: 'admin',
  password: 'password123',
  email: 'admin@example.com',
};

async function seed() {
  if (!process.env.MONGODB_URI) {
    console.error('No MONGODB_URI found.');
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    await Project.deleteMany({});
    await Blog.deleteMany({});
    await Admin.deleteMany({});

    console.log('✅ DB cleared');

    // Seed Admin
    const passwordHash = await bcrypt.hash(SEED_ADMIN.password, 10);
    const admin = new Admin({ username: SEED_ADMIN.username, email: SEED_ADMIN.email, passwordHash });
    await admin.save();
    console.log(`✅ Admin created with username: ${SEED_ADMIN.username} and password: ${SEED_ADMIN.password}`);

    const projects = [
      {
        title: 'Inventory Management System',
        description: 'Stock + orders + warehouses with dashboards',
        techStack: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/tulman-tamang/inventory',
        liveDemo: '',
        category: 'Full Stack',
        year: 2024,
        featured: true,
        image: ''
      },
      {
        title: 'Admin Dashboard System',
        description: 'Modular dashboards with charts',
        techStack: ['React', 'Express', 'MongoDB'],
        github: '',
        liveDemo: '',
        category: 'Dashboard',
        year: 2023,
        featured: false,
        image: ''
      }
    ];

    const blogs = [
      {
        title: 'Getting Started with the MERN Stack',
        excerpt: 'An introductory guide',
        content: 'Markdown or plain text content',
        tags: ['mern', 'webdev'],
        author: 'Admin',
        date: new Date(),
        readTime: 6,
        enabled: true
      },
      {
        title: 'UI Architecture for Modern Apps',
        excerpt: 'Design tokens and scalable UI',
        content: 'More content here',
        tags: ['ui', 'design'],
        author: 'Admin',
        date: new Date(),
        readTime: 5,
        enabled: true
      }
    ];

    await Project.insertMany(projects);
    await Blog.insertMany(blogs);
    
    console.log('🎉 Seeding complete');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();
