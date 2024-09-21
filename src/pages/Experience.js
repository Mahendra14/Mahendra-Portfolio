import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Vasavi College Of Engineering, India
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Project Intern - Oracle
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hyderabad, India.
          </h4>
          <p>Conceptualized an automated API release prototype, automated Oracle Cloud Gateways, improved CI/CD processes, boosting productivity and efficiency by 20%, earning "Best Employee of the Month" in March 2021.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer ( Software Engineer ) - Oracle
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hyderabad, India.
          </h4>
          <p>
            Developed an ELK dashboard, engineered a SaaS billing module, led a GraphQL streaming initiative, revamped IAM security, and drove Agile practices as a Scrum Master, boosting overall performance and security.         </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - Expected 2025"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Arizona State University, Tempe, Arizona.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Master's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Data Science Intern - Master Electronics
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Phoenix, Arizona.
          </h4>
          <p>
            At Master Electronics, I optimized workflows by integrating Databricks, automated 70% of purchase order extraction, reduced pricing errors by 10%, and improved AI model accuracy and speed using PySpark and Databricks.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
