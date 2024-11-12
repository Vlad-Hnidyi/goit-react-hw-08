import AccordionUsage from "../../components/Accordion/Accordion";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Digital Phone Book Web Application
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <p className={css.descr}>
        Our web application provides a convenient and efficient way to create
        and manage your own digital phone book. You can easily store important
        contacts and quickly find the necessary information whenever you need
        it. With its user-friendly interface, you’ll be able to add, organize,
        and search through your contacts effortlessly.
      </p>
      <h2>Our benefits</h2>
      <div>
        <AccordionUsage />
      </div>
    </div>
  );
};

export default HomePage;
