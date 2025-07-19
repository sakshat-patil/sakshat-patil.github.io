import React from 'react';
import { 
  FaPython, 
  FaJava, 
  FaDocker, 
  FaGithub,
  FaAws,
  FaTerminal,
  FaCloud,
  FaMicrosoft
} from 'react-icons/fa';
import { 
  SiCplusplus, 
  SiGit, 
  SiKubernetes,
  SiFastapi,
  SiSpringboot,
  SiTwilio,
  SiAnthropic,
  SiLangchain,
  SiGooglecloud,
  SiRedhat,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiC,
  SiRedis,
  SiReact,
  SiPhp,
  SiTypescript,
  SiJupyter,
  SiOpenai,
  SiHuggingface,
  SiPostman,
  SiIntellijidea,
  SiSpring,
  SiNodedotjs,
  SiApache,
  SiElasticsearch
} from 'react-icons/si';
import { VscAzureDevops } from "react-icons/vsc";
import { PiFileSql } from "react-icons/pi";
import './SkillsSection.css';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'languages' | 'devops' | 'cloud' | 'ai' | 'ai-tools' | 'frameworks' | 'tools';
}

const skills: Skill[] = [
  // Languages
  { name: 'Python', icon: <FaPython />, category: 'languages' },
  { name: 'Bash', icon: <FaTerminal />, category: 'languages' },
  { name: 'Java', icon: <FaJava />, category: 'languages' },
  { name: 'Oracle SQL', icon: <PiFileSql />, category: 'languages' },
  { name: 'C++', icon: <SiCplusplus />, category: 'languages' },
  { name: 'C', icon: <SiC />, category: 'languages' },
  { name: 'TypeScript', icon: <SiTypescript />, category: 'languages' },
  { name: 'PHP', icon: <SiPhp />, category: 'languages' },

  // DevOps Tools
  
  // DevOps Tools
  { name: 'Git', icon: <SiGit />, category: 'devops' },
  { name: 'Azure DevOps', icon: <VscAzureDevops />, category: 'devops' },
  { name: 'Docker', icon: <FaDocker />, category: 'devops' },
  { name: 'Kubernetes', icon: <SiKubernetes />, category: 'devops' },
  { name: 'Apache', icon: <SiApache />, category: 'devops' },
  { name: 'GitHub Actions', icon: <FaGithub />, category: 'devops' },
  { name: 'Elasticsearch', icon: <SiElasticsearch />, category: 'devops' },
  
  // Cloud Services
  { name: 'AWS', icon: <FaAws />, category: 'cloud' },
  { name: 'Google Cloud', icon: <SiGooglecloud />, category: 'cloud' },
  { name: 'IBM Cloud', icon: <FaCloud />, category: 'cloud' },
  { name: 'Red Hat OpenStack', icon: <SiRedhat />, category: 'cloud' },
  { name: 'Azure', icon: <FaMicrosoft />, category: 'cloud' },
  
  // AI Services
  { name: 'TensorFlow', icon: <SiTensorflow />, category: 'ai' },
  { name: 'PyTorch', icon: <SiPytorch />, category: 'ai' },
  { name: 'Pandas', icon: <SiPandas />, category: 'ai' },
  { name: 'NumPy', icon: <SiNumpy />, category: 'ai' },
  { name: 'Jupyter', icon: <SiJupyter />, category: 'ai' },
  { name: 'OpenAI API', icon: <SiOpenai />, category: 'ai' },
  
  // AI Development Tools
  { name: 'Anthropic API', icon: <SiAnthropic />, category: 'ai-tools' },
  { name: 'LangChain', icon: <SiLangchain />, category: 'ai-tools' },
  { name: 'Hugging Face', icon: <SiHuggingface />, category: 'ai-tools' },
  
  // Frameworks & APIs
  { name: 'FastAPI', icon: <SiFastapi />, category: 'frameworks' },
  { name: 'Spring Boot', icon: <SiSpringboot />, category: 'frameworks' },
  { name: 'Twilio', icon: <SiTwilio />, category: 'frameworks' },
  { name: 'Redis', icon: <SiRedis />, category: 'frameworks' },
  { name: 'React', icon: <SiReact />, category: 'frameworks' },
  { name: 'Node.js', icon: <SiNodedotjs />, category: 'frameworks' },
  { name: 'Microservices', icon: <SiKubernetes />, category: 'frameworks' },
  
  // Tools
  { name: 'Postman', icon: <SiPostman />, category: 'tools' },
  { name: 'IntelliJ IDEA', icon: <SiIntellijidea />, category: 'tools' },
  { name: 'Spring Tool Suite', icon: <SiSpring />, category: 'tools' },
  { name: 'VS Code', icon: <FaTerminal />, category: 'tools' },
  { name: 'Cursor', icon: <FaTerminal />, category: 'tools' },
  

];

const categoryLabels = {
  languages: 'Programming Languages',
  devops: 'DevOps & Infrastructure',
  cloud: 'Cloud Services',
  ai: 'AI & Machine Learning',
  'ai-tools': 'AI Development Tools',
  frameworks: 'Frameworks & APIs',
  tools: 'Development Tools'
};

const SkillsSection: React.FC = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 style={{ color: '#fff', textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>
          Skills & Technologies
        </h2>
        
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category} className="skill-category">
            <h3 style={{ color: '#fff', textAlign: 'center', fontSize: '1.5rem', marginBottom: '1rem' }}>
              {categoryLabels[category as keyof typeof categoryLabels]}
            </h3>
            <div className={`skills-grid ${category === 'languages' ? 'languages-grid' : ''}`}>
              {categorySkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <h4 className="skill-name">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection; 