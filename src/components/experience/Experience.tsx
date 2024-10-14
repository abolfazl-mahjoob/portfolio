import { ReactElement } from "react";
import "./Experience.css";

function Experience({
  date,
  compeny,
  position,
  children,
}: {
  date: string;
  compeny: string;
  position: string;
  children: ReactElement;
}) {
  return (
    <li className="experience-item">
      <div className="date">{date}</div>
      <div className="compeny">{compeny}</div>
      <h2>{position}</h2>
      {children}
    </li>
  );
}

export default Experience;
