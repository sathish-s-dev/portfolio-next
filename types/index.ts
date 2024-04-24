type Project = {
  id: string;
  name: string;
  codeUrl: string;
  liveUrl: string;
  image: string;
  tags: string[];
  description?: string[];
  futurePlans?: string[];
  achievements?: string[];
};

type Skill = { name: string; image: string; invert?: boolean };
