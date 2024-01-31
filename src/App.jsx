import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      <div>
        Selected Contact View
        {selectedContactId ? (
          <SelectedContact
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
          />
        ) : (
          <ContactList
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
          />
        )}
      </div>
    </>
  );
}
export default App;
