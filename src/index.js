import React from "react";
import ReactDOM from "react-dom";
import pricingPlanItems from "./assets/pricing-plan.json";
import PricingPlan from "./PricingPlan/PricingPlan";

ReactDOM.render(
  <PricingPlan items={pricingPlanItems} />,
  document.getElementById("root"),
);
