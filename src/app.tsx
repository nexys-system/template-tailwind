import React from "react";

import Card from "./components/card";
import Icon from "./components/icon";

const App = () => {
  return (
    <Card>
      <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
      <Icon name="sun" />
    </Card>
  );
};

export default App;
