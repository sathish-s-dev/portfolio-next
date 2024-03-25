type Project = {
  id: string;
  name: string;
  codeUrl: string;
  liveUrl: string;
  image: string;
  tags: string[];
  description?: string[];
  achievements?: string[];
  futurePlans?: string[];
};

type Skill = { name: string; image: string; invert?: boolean };
