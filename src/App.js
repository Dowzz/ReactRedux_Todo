import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Todos from "./Container/Todos";
import  store, { persistor } from "./store";


function App() {

  return (
    <Provider store={store}>
      <PersistGate 
      loading={<p>Chargement...</p>}
      persistor={persistor}> 
  <Todos />
  </PersistGate>
  </Provider>
  )
}

export default App;
