import React, { Component } from 'react';
import '../assets/css/about.css';
import ClientSlider from '../body/ClientSlider';
class Aboutus extends Component {
  render() {
    return (
      <div>
        <h2>NAV Solution Pvt.ltd</h2>
        <p style={{ margin: '20px', textAlign: 'justify', padding: '5pxs' }}>
          Continuous development in Technology brought these amounts of channels
          in existence, and so the large investment trend started for the
          establishment of broadcast company, and then came the electronics
          Media into existence in the form of television. Opening a Television
          was not an easy Task for the country like Nepal, but then Technology
          was ruling the world and that’s why Small countries started opting the
          advance technology and investing large amount of budget for opening a
          Television. Now the trend is changing, investment ration in
          broadcasting industry is decreasing day by day and the quality is
          getting better in same ratio. To meet the investment ratio of each
          investor throughout the Country, NAV SOLUTION PVT.LTD (NAVPL) has a
          Research and Development (R & D) team setup whose motto is to use
          required budget and implement High-Tech solution for a television
          establishment, where Investor can also discuss the Investment part
          with NAVPL team. NAV SOLUTION PVT.LTD (NAVPL) is a complete media and
          broadcast solution Provider Company for upcoming and existing High and
          low budget television. Nepal has small market structure and running
          expensive setups for television which is not feasible. In Nepal there
          are many small community and co-operative based televisions in
          existence with competitive Nepalese market. Technologies are dynamic
          and never stand static; traditionally it was found that the minimum
          television setup needed is at least 20 million. Old technologies are
          always costly, so it is proven that adopting and upgrading by new
          technology is always cheaper and superior. NAVPL provides all the
          broadcasting solutions in High and low budget including Playout
          automation , Character generator, Live mixing with Chroma solution,
          Streaming , Studio lights, Camera etc. These solutions will be in full
          HD and SDI ready for your satellite uplink.
        </p>
        <div className='our-clints'>
          <h2>Our Television client</h2>
          <ClientSlider />
        </div>
      </div>
    );
  }
}

export default Aboutus;
