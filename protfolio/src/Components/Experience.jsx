import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className='exp-back'>
      <section id="experience">
        <div className='exp-head'>
          <span style={{ color: "rgb(198, 81, 100)" }}>My</span> Experience
        </div>
        <div className='experience-content'>
          <div className='experience-card'>
            <h3>I-BACUS Tech, Coimbatore</h3>
            <p><strong>Role:</strong> Frontend Developer</p>
            <p><strong>Duration:</strong> May 2024 - Present</p>
            <p><strong>Key Contributions:</strong></p>
            <ul>
              <li>
                <strong>Manohar Jewellery:</strong>  
                Designed and developed an intuitive UI for the inventory management system, focusing on **seamless barcode scanning, product categorization, and billing functionalities**.  
                <ul>
                  <li>Implemented a **real-time barcode scanning feature** for quick product identification.</li>
                  <li>Designed a **lot-based product grouping system** for better inventory tracking.</li>
                  <li>Developed a **responsive and visually appealing billing interface**, ensuring ease of use.</li>
                  <li>Optimized the **final weight calculation logic** for better accuracy.</li>
                  <li>Received excellent feedback from the client for delivering a **user-friendly, error-free experience** that improved operational efficiency.</li>
                </ul>
              </li>

              <li>
                <strong>Good Foods:</strong>  
                Improved the user experience of the **Skipped Cart section, Wallet system, and automated meal tracking**, ensuring smooth navigation and responsiveness.  
                <ul>
                  <li>Designed an **interactive Skipped Cart UI**, making reordering skipped meals seamless.</li>
                  <li>Developed a **Wallet integration system**, ensuring effortless transactions.</li>
                  <li>Enhanced **mobile responsiveness**, making the platform accessible on all devices.</li>
                </ul>
              </li>

              <li>
                <strong>Checklist Genie:</strong>  
                Designed a clean and structured **task management system UI**, enabling easy task creation, assignment, and completion.  
                <ul>
                  <li>Implemented a **drag-and-drop feature** for better checklist management.</li>
                  <li>Ensured **automated email notifications** for completed tasks.</li>
                  <li>Optimized the UI for **faster task assignment and tracking**.</li>
                </ul>
              </li>

              <li>Ensured **pixel-perfect UI designs**, making applications look professional and user-friendly.</li>
              <li>Implemented **state management techniques** for a smoother and more efficient frontend experience.</li>
              <li>Collaborated with the team to improve **UI performance and load times**.</li>
              <li>Guided interns in **CSS styling, UI components, and frontend best practices** to maintain consistency.</li>

              <li>
                <strong>Journey Analytics:</strong>  
                As part of the **Journey Analytics Project**, I worked in a collaborative team, focusing on frontend development to ensure **seamless integration and an optimized user experience**. My contributions involved enhancing the **interface, improving usability, and delivering a smooth and engaging customer journey visualization**.
              </li>

              <li>
                <strong>Tech Coach:</strong>  
                As a **Decision Coach**, I worked as part of a team focused on frontend development, ensuring the **best user experience for the client**. My contributions included **optimizing the interface, improving usability, and delivering a seamless frontend experience**.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
