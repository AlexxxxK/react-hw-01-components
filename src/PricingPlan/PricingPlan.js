import React from "react";
import PropTypes from "prop-types";
import PricingItem from "../PricingItem/PricingItem";
import styles from "./PricingPlan.module.css";

const PricingPlan = ({ items }) => {
  return (
    <ul className={styles.pricingPlan}>
      {items.map(item => (
        <li key={item.label} className={styles.item}>
          <PricingItem
            icon={item.icon}
            label={item.label}
            capacity={item.capacity}
            description={item.description}
            price={item.price}
          />
        </li>
      ))}
    </ul>
  );
};

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      capacity: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PricingPlan;
