import { Divider } from "@mui/material";
import { Link } from 'react-router-dom';

function UsedMBGuide ({pageName}) {
    return (
        <div>
            <h1>Used Computer Suggestions</h1>

            <p>When looking for a budget laptop you may think going to BestBuy or Walmart and sorting by lowest price is where you will find good budget laptops. However, looking at what laptops come up you will find that most of them share 3 points: poor build quality, cheap screens, and slow performance. Which many will settle for since they think those are the best you can get. While if you don’t mind doing some research and going back a few generations you will end up with a computer that has better build quality, better screen, and better performance.</p>

            <h2>Apple</h2>

            <Divider />

            <p>There are 3 main tiers of MacBook’s that still hold up well today, from most budget to brand new.</p>

            <ol>
                <li><Link to={'/blog/2012_macbook_pros'}>Mid 2012 MacBook pro - $100-300</Link></li>
                <li><Link to={'/blog/2015_macbook_pros'}>Mid 2015 MacBook pro - $300-600</Link></li>
            </ol>
        </div>
    );
};
  
export default UsedMBGuide;