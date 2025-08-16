import React, { useState } from 'react';
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
  SiElasticsearch,
  SiDocker
} from 'react-icons/si';
import { VscAzureDevops } from "react-icons/vsc";
import { PiFileSql } from "react-icons/pi";
import './SkillsSection.css';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'languages' | 'devops' | 'cloud' | 'ai' | 'ai-tools' | 'frameworks' | 'tools';
  proficiency?: number; // 1-5 scale
  description?: string;
}

const skills: Skill[] = [
  // Languages
  { name: 'Python', icon: <FaPython />, category: 'languages', proficiency: 5, description: 'Advanced Python development with focus on backend and AI' },
  { name: 'Java', icon: <FaJava />, category: 'languages', proficiency: 4, description: 'Enterprise Java development with Spring framework' },
  { name: 'TypeScript', icon: <SiTypescript />, category: 'languages', proficiency: 4, description: 'Modern TypeScript for full-stack development' },
  { name: 'C++', icon: <SiCplusplus />, category: 'languages', proficiency: 3, description: 'System programming and performance optimization' },
  { name: 'Bash', icon: <FaTerminal />, category: 'languages', proficiency: 4, description: 'Shell scripting and automation' },
  { name: 'SQL', icon: <PiFileSql />, category: 'languages', proficiency: 4, description: 'Database design and optimization' },
  { name: 'C', icon: <SiC />, category: 'languages', proficiency: 3, description: 'Low-level programming and embedded systems' },
  { name: 'PHP', icon: <SiPhp />, category: 'languages', proficiency: 3, description: 'Web development and legacy system maintenance' },

  // DevOps Tools
  { name: 'Docker', icon: <FaDocker />, category: 'devops', proficiency: 4, description: 'Containerization and microservices deployment' },
  { name: 'Kubernetes', icon: <SiKubernetes />, category: 'devops', proficiency: 4, description: 'Container orchestration and cluster management' },
  { name: 'Git', icon: <SiGit />, category: 'devops', proficiency: 5, description: 'Version control and collaborative development' },
  { name: 'GitHub Actions', icon: <FaGithub />, category: 'devops', proficiency: 4, description: 'CI/CD pipeline automation' },
  { name: 'Azure DevOps', icon: <VscAzureDevops />, category: 'devops', proficiency: 3, description: 'Enterprise DevOps and project management' },
  { name: 'Apache', icon: <SiApache />, category: 'devops', proficiency: 3, description: 'Web server configuration and management' },
  { name: 'Elasticsearch', icon: <SiElasticsearch />, category: 'devops', proficiency: 3, description: 'Search and analytics platform' },
  
  // Cloud Services
  { name: 'AWS', icon: <FaAws />, category: 'cloud', proficiency: 4, description: 'Cloud infrastructure and serverless architecture' },
  { name: 'Google Cloud', icon: <SiGooglecloud />, category: 'cloud', proficiency: 3, description: 'Cloud platform and AI services' },
  { name: 'Azure', icon: <FaMicrosoft />, category: 'cloud', proficiency: 3, description: 'Microsoft cloud services and integration' },
  { name: 'IBM Cloud', icon: <FaCloud />, category: 'cloud', proficiency: 3, description: 'Enterprise cloud solutions' },
  { name: 'Red Hat OpenStack', icon: <SiRedhat />, category: 'cloud', proficiency: 2, description: 'Open source cloud infrastructure' },
  
  // AI Services
  { name: 'TensorFlow', icon: <SiTensorflow />, category: 'ai', proficiency: 4, description: 'Deep learning and neural network development' },
  { name: 'PyTorch', icon: <SiPytorch />, category: 'ai', proficiency: 4, description: 'Machine learning and research applications' },
  { name: 'Pandas', icon: <SiPandas />, category: 'ai', proficiency: 5, description: 'Data manipulation and analysis' },
  { name: 'NumPy', icon: <SiNumpy />, category: 'ai', proficiency: 4, description: 'Numerical computing and array operations' },
  { name: 'Jupyter', icon: <SiJupyter />, category: 'ai', proficiency: 4, description: 'Interactive data science and research' },
  { name: 'OpenAI API', icon: <SiOpenai />, category: 'ai', proficiency: 4, description: 'Large language model integration' },
  
  // AI Development Tools
  { name: 'Anthropic API', icon: <SiAnthropic />, category: 'ai-tools', proficiency: 4, description: 'Claude AI model integration' },
  { name: 'LangChain', icon: <SiLangchain />, category: 'ai-tools', proficiency: 4, description: 'LLM application development framework' },
  { name: 'Hugging Face', icon: <SiHuggingface />, category: 'ai-tools', proficiency: 3, description: 'Transformer models and NLP' },
  
  // Frameworks & APIs
  { name: 'FastAPI', icon: <SiFastapi />, category: 'frameworks', proficiency: 5, description: 'High-performance Python web framework' },
  { name: 'Spring Boot', icon: <SiSpringboot />, category: 'frameworks', proficiency: 4, description: 'Enterprise Java microservices' },
  { name: 'React', icon: <SiReact />, category: 'frameworks', proficiency: 4, description: 'Modern frontend development' },
  { name: 'Node.js', icon: <SiNodedotjs />, category: 'frameworks', proficiency: 3, description: 'JavaScript runtime and backend development' },
  { name: 'Redis', icon: <SiRedis />, category: 'frameworks', proficiency: 4, description: 'In-memory data structure store' },
  { name: 'Twilio', icon: <SiTwilio />, category: 'frameworks', proficiency: 3, description: 'Communication API integration' },
  { name: 'Microservices', icon: <SiKubernetes />, category: 'frameworks', proficiency: 4, description: 'Distributed system architecture' },
  
  // Tools
  { name: 'Postman', icon: <SiPostman />, category: 'tools', proficiency: 4, description: 'API development and testing' },
  { name: 'IntelliJ IDEA', icon: <SiIntellijidea />, category: 'tools', proficiency: 4, description: 'Java IDE and development environment' },
  { name: 'VS Code', icon: <FaTerminal />, category: 'tools', proficiency: 5, description: 'Code editor and development environment' },
  { name: 'Spring Tool Suite', icon: <SiSpring />, category: 'tools', proficiency: 3, description: 'Spring framework development tools' },
  { name: 'Cursor', icon: <FaTerminal />, category: 'tools', proficiency: 4, description: 'AI-powered code editor' },
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

const categoryColors = {
  languages: '#667eea',
  devops: '#764ba2',
  cloud: '#f093fb',
  ai: '#f5576c',
  'ai-tools': '#4facfe',
  frameworks: '#00f2fe',
  tools: '#667eea'
};

const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const renderProficiencyBars = (proficiency: number) => {
    return (
      <div className="proficiency-bars">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`proficiency-bar ${level <= proficiency ? 'filled' : ''}`}
            style={{
              backgroundColor: level <= proficiency ? categoryColors[selectedCategory as keyof typeof categoryColors] || '#667eea' : '#e2e8f0'
            }}
          />
        ))}
      </div>
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'languages':
        return <SiCplusplus />;
      case 'devops':
        return <SiDocker />;
      case 'cloud':
        return <FaAws />;
      case 'ai':
        return <SiTensorflow />;
      case 'ai-tools':
        return <SiHuggingface />;
      case 'frameworks':
        return <SiSpringboot />;
      case 'tools':
        return <SiPostman />;
      default:
        return <FaTerminal />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        {/* Category Navigation */}
        <div className="category-nav">
          {Object.entries(categoryLabels).map(([category, label]) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
              style={{
                '--category-color': categoryColors[category as keyof typeof categoryColors]
              } as React.CSSProperties}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="skills-display">
          {selectedCategory ? (
            // Show selected category
            <div className="selected-category">
              <div className="category-header">
                <h3 className="category-title">
                  {categoryLabels[selectedCategory as keyof typeof categoryLabels]}
                </h3>
                <button 
                  className="back-btn"
                  onClick={() => setSelectedCategory(null)}
                >
                  ← Back to All
                </button>
              </div>
              <div className="skills-grid-detailed">
                {skillsByCategory[selectedCategory].map((skill, index) => (
                  <div 
                    key={index} 
                    className="skill-card-detailed"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="skill-header">
                      <div className="skill-icon-detailed">
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <h4 className="skill-name-detailed">{skill.name}</h4>
                        {renderProficiencyBars(skill.proficiency || 3)}
                      </div>
                    </div>
                    {skill.description && (
                      <p className="skill-description">{skill.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Show all categories overview
            <div className="categories-overview">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <div 
                  key={category} 
                  className="category-card"
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    '--category-color': categoryColors[category as keyof typeof categoryColors]
                  } as React.CSSProperties}
                >
                  <div className="category-card-header">
                    <h3 className="category-card-title">
                      {categoryLabels[category as keyof typeof categoryLabels]}
                    </h3>
                    <span className="skill-count">{categorySkills.length} skills</span>
                  </div>
                  <div className="category-skills-preview">
                    {categorySkills.slice(0, 6).map((skill, index) => (
                      <div key={index} className="skill-preview">
                        {skill.icon}
                      </div>
                    ))}
                    {categorySkills.length > 6 && (
                      <div className="skill-preview more">
                        +{categorySkills.length - 6}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 