import "./App.css";
import LenderCard from "./components/LenderCard";
import { Flex } from "@chakra-ui/react";

const mocked_data = {
  benefits: [
    { id: 1, label: "Lender Benefit" },
    { id: 2, label: "Lender Benefit" },
    { id: 3, label: "Lender Benefit" },
  ],
  priceRange: { min: "10,000", max: "1,000,000" },
  info: "Fill with Lorem ipsum dhfe ndwufiu fheh u2en i19h ueu2 0 he ns asabsqh sw whhdi dw ppwd euy4h dbdjq jeeoi nd.",
  companyName: "Lendistry",
};

function App() {
  return (
    <div className="App">
      <Flex width="432px" height="auto" direction="column">
        <LenderCard
          benefits={mocked_data.benefits}
          priceRange={mocked_data.priceRange}
          info={mocked_data.info}
          companyName={mocked_data.companyName}
        />
      </Flex>
    </div>
  );
}

export default App;
