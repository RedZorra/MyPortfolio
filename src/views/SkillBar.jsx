import React, { useState, useEffect } from 'react';


const SkillBar = ({ skill, percentage }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(percentage);
  }, [percentage]);

  return (
    <div className="skill-bar">
      <div className="skill-name">{skill}</div>
      <div className="skill-progress">
        <div 
          className="progress-bar" 
          style={{ width: `${width}%` }}
        >
          {width}%
        </div>
      </div>
    </div>
  );
};

export default SkillBar;