import { Button } from "./components/button/button";
import { ThemeToggle } from "./components/theme-toggle";

export const App = () => {
  return (
    <div>
      <ThemeToggle />
      <h1>SCSS Web App</h1>
      App
      <Button />
      <Button disabled />
      <Button variant="secondary" />
      <Button variant="secondary" disabled />
    </div>
  );
};

export default App;
