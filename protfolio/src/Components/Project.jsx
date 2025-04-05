
import React from 'react';
import './Project.css';

const Project = () => {
  return (
    <div id='projects' className='projects-container'>
      <h2>
        <span style={{ color: 'rgb(198, 81, 100)' }}>My</span> Projects
      </h2>
      <div className='projects-grid'>
        <div className='project-card'>
          <h3>Checklist Genie</h3>
          <div className='card-content'>
            <p>
              <strong style={{color:'aqua'}}>Overview:</strong> Checklist Genie is a task management system designed to streamline checklist
              creation, assignment, and completion for both admins and users. The platform provides an intuitive
              workflow for managing tasks, ensuring accountability, and automating email notifications upon submission.
            </p><br/>
            <ul>
              <li><strong>Admin Access:</strong> Restricted to specific email domains.</li>
              <li><strong>Tag Management:</strong> Admins can create and assign tags.</li>
              <li><strong>Template Creation:</strong> Enables structured checklists.</li>
              <li><strong>Task Assignment:</strong> Assign templates to users.</li>
              <li><strong>Item Management:</strong> Add, edit, or remove checklist items.</li>
              <li><strong>Task Monitoring:</strong> View, edit, and delete checklists.</li>
              <li><strong>User Access:</strong> View and submit checklists with email notifications.</li>
            </ul>
            <a href="https://github.com/Dhanusha-Ravikannan/checklist_genie" className="github-link">
            View on GitHub 
    </a>
            
          </div>
        </div>
        <div className='project-card'>
          <h3>Manohar Jewellery</h3>
          <div className='card-content'>
            <p>
              <strong style={{color:'aqua'}}>Overview:</strong> A product management system for tracking jewellery inventory, including barcode generation, billing, and product categorization.
            </p><br/>
            <ul>
              <li>Product barcode generation and scanning.</li>
              <li>Inventory management with weight tracking.</li>
              <li>Billing system with invoice generation.</li>
              <li>Lot-based product grouping.</li>
              <li>Adjustment logic for final weight calculation.</li>
            </ul>
            <a href="https://github.com/Dhanusha-Ravikannan/Manohar-Jewellery" className="github-link">
             View on GitHub
    </a>
            
          </div>
        </div>
        <div className='project-card'>
          <h3>Good Foods</h3>
          <div className='card-content'>
            <p>
              <strong style={{color:'aqua'}}>Overview:</strong> A food ordering and subscription system allowing users to manage meal plans, skip meals, and reorder items seamlessly.
            </p><br/>
            <ul>
              <li>Meal subscription management.</li>
              <li>Skipped cart section for reordering skipped meals.</li>
              <li>Automated meal tracking and reporting.</li>
              <li>Wallet integration for seamless transactions.</li>
              <li>Mobile-responsive design for user accessibility.</li>
            </ul>
            <a href="https://github.com/Dhanusha-Ravikannan/Good-Food" className="github-link">
             View on GitHub
    </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

