import React from "react";
import "./Project.css";
import foodImage from "../Assets/food.jpg";
import jewelleryImage from "../Assets/jewell.jpg";
import checklistImage from "../Assets/checklist.webp";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Project = () => {
  const projects = [
    {
      title: "Checklist Genie",
      image: checklistImage,
      github: "https://github.com/Dhanusha-Ravikannan/checklist_genie",
      overview: `Checklist Genie is a task management system designed to streamline checklist creation, assignment, and completion for both admins and users.`,
      features: [
        "Admin Access: Restricted to specific email domains.",
        "Tag Management: Admins can create and assign tags.",
        "Template Creation: Enables structured checklists.",
        "Task Assignment: Assign templates to users.",
        "Item Management: Add, edit, or remove checklist items.",
        "Task Monitoring: View, edit, and delete checklists.",
        "User Access: View and submit checklists with email notifications.",
      ],
    },

    {
      title: "Manohar Jewellery",
      image: jewelleryImage,
      github: "https://github.com/Dhanusha-Ravikannan/Manohar-Jewellery",
      overview: `A responsive inventory and billing management system tailored for a jewellery business, designed to automate operations, minimize manual errors, and improve workflow efficiency.`,
      features: [
        "Developed a full-fledged inventory and billing system to reduce manual work and human error.",
        "Implemented automatic weight calculations, adjustment logic, and dynamic product number generation based on minimal input.",
        "Enabled QR code generation for each product, allowing barcode scanning to auto-fill billing information.",
        'Automated product status transition from "Active" to "Sold" after billing, with a restoration feature via QR scanning.',
        "Product barcode generation and scanning integrated into the UI for streamlined operations.",
        "Supported inventory management with real-time before and after weight tracking.",
        "Lot-based product grouping system for easy product categorization and tracking.",
        "Enabled filtered product views, dynamic bill creation, and exportable PDF reports.",
        "Successfully met client expectations by delivering a responsive, efficient, and automated system that improved operational accuracy and workflow.",
      ],
    },

    {
      title: "Good Foods",
      image: foodImage,
      github: "https://github.com/Dhanusha-Ravikannan/Good-Food",

      overview: `A subscription-based food ordering platform with automated daily deliveries. Admins manage the subscription menu, while users can manage their meal plans after subscribing. The system automates delivery tracking and notifications.`,

      features: [
        "Admin creates subscription plans which users can subscribe to.",
        "Subscription-based daily meal ordering with auto-delivery logic.",
        "Skip cart functionality: users can skip meals within a specific time window and reorder them later.",
        "Admin-controlled daily food menu creation and updates.",
        "Email notifications for order confirmations and new user subscriptions.",
        "Responsive design optimized for mobile and desktop users.",
        "Backend tracking of delivered, skipped, and reordered meals.",
      ],
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <h2>
        <span style={{ color: "crimson" }}>My</span> Projects
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="card-content">
              <p className="overview">
                <strong>Overview:</strong> {project.overview}
              </p>

              <Accordion className="custom-accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  className="custom-summary"
                >
                  <Typography
                    className="accordion-title"
                    style={{ fontSize: "1rem", fontWeight: "bold" }}
                  >
                    View More Details
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="custom-details">
                  <ul className="feature-list">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>

              <div className="card-footer">
                <a
                  href={project.github}
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub <i className="bx bxl-github"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
