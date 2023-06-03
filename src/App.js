import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather defaultCity="London" />
        <footer>
          This project is created by Paige Powell and is{" "}
          <a
            href="https://github.com/paigeymp/weather-shecodes-react"
            target="_blank"
            title="github"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
