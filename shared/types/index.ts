export interface IProject {
  id?: string;
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  github?: string;
  liveDemo?: string;
  category?: string;
  featured?: boolean;
  year?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IBlog {
  id?: string;
  title: string;
  excerpt?: string;
  content: string;
  tags?: string[];
  author?: string;
  date?: string;
  readTime?: number;
  enabled?: boolean;
}

export interface IContact {
  id?: string;
  name: string;
  email: string;
  message: string;
  createdAt?: string;
  status?: string;
}

export interface IAdmin {
  id?: string;
  username: string;
  email: string;
  passwordHash?: string;
  roles?: string[];
  createdAt?: string;
}
