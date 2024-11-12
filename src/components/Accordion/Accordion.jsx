import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import css from "./Accordion.module.css";

export default function AccordionUsage() {
  return (
    <div>
      <Accordion className={css.acc}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={css.icon} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className={css.summary}
        >
          Set Up Your Digital Phone Book:
        </AccordionSummary>
        <AccordionDetails className={css.details}>
          Sign up to begin saving your contacts securely on our platform.
        </AccordionDetails>
      </Accordion>
      <Accordion className={css.acc}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={css.icon} />}
          aria-controls="panel2-content"
          id="panel2-header"
          className={css.summary}
        >
          Manage Contacts Effortlessly:
        </AccordionSummary>
        <AccordionDetails className={css.details}>
          Add, update, or remove contacts as needed, keeping your contact list
          up-to-date.
        </AccordionDetails>
      </Accordion>
      <Accordion className={css.acc}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={css.icon} />}
          aria-controls="panel3-content"
          id="panel3-header"
          className={css.summary}
        >
          Quickly Locate Contacts:
        </AccordionSummary>
        <AccordionDetails className={css.details}>
          Use search and filter tools to find specific contacts in seconds.
        </AccordionDetails>
      </Accordion>
      <Accordion className={css.acc}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={css.icon} />}
          aria-controls="panel4-content"
          id="panel4-header"
          className={css.summary}
        >
          Safe and Accessible Data Storage:
        </AccordionSummary>
        <AccordionDetails className={css.details}>
          Your contacts are stored securely and are available whenever you log
          in.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
