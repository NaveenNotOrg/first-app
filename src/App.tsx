import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  return (
    <div>
      <Alert>
        Hiiii <span>Naveen</span>
      </Alert>
      <Button onClick={() => console.log("Pressed")} color="danger">
        {" "}
        press me
      </Button>
    </div>
  );
}

export default App;
