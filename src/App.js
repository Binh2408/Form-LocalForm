import React from "react";

import { Provider } from "react-redux";
import store from "./shared/store";
import Counter from "./Counter";
import UserForm from "./components/UserForm";
import ContactForm from "./components/ContactForm";

function App() {
  // return (
  //   <Provider store={store}>
  //     <Counter />
  //   </Provider>
  // );
  return (
    <div>
      <Provider store={store}>
        <UserForm />
      </Provider>
      <ContactForm/>
      </div>
  );
}
export default App;
