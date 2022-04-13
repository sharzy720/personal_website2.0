import Header from "./components/Header";
import ResponsiveAppBar from "./components/menuBar";
import Box from '@mui/material/Box';
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { AlignHorizontalCenter } from "@mui/icons-material";
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import Blog from "./pages/blog";
import Modding from "./pages/modding";
import Portfolio from "./pages/portfolio";
import Walkthrough from "./pages/walkthroughs";
import Home from "./pages/home";
import Programming from "./pages/programming";
import UsedMBGuide from "./blog/used_macbook_guide";
import MacBookPros2012 from "./blog/2012_macbook_pros";

//https://elementz.style
//https://mui.com/material-ui/react-button/

function App({pageName}) {
  return (
    <Router>
      <Container maxWidth="lg" disableGutters='true'
        style={{ border:  '2px solid black',
                 backgroundColor: "mediumpurple"}}>
        <ResponsiveAppBar title={pageName}/>

        <div style={{ padding:'20px'}}>
        <Switch>
            <Route exact path="/" element={<Home />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/blog/used_macbook_guide" element={<UsedMBGuide />}/>
            <Route path="/blog/2012_macbook_pros" element={<MacBookPros2012 />}/>
            <Route path="/modding" element={<Modding />}/>
            <Route path="/walkthroughs" element={<Walkthrough />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/programming" element={<Programming />}/>
        </Switch>
        </div>
      </Container>

    </Router>
  );
}

export default App;
