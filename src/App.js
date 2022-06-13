import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/Rent";
import PageTwo from "./pages/Contacts";
import PageThree from "./pages/About";
import { BrowserRouter, Redirect } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from './index';
import { useState } from 'react';
import { useEffect } from 'react';
import { check } from "./http/UserAPI";

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAyth(true )
    }).finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/rent">
            <PageOne />
          </Route>
          <Route path="/contacts">
            <PageTwo />
          </Route>
          <Route path="/about">
            <PageThree />
          </Route>
            <AppRouter />
            
          <Redirect to="/" />
        </Switch>
      </Layout>
    </>
  );
})

export default App;
