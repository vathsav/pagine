import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CountryCard extends Component {
  render() {
    const { country } = this.props;

    return (
      <div className="card mb-3 p-0">

        {country === 'india' && (
        <div className="p-3">
          <div className="title-small pb-2 text-uppercase">
            India
          </div>

          <div className="content-small">
            Where I was born. I'd lived in 7 different cities, studied in 9 schools, did my Bachelor's in Computer
            Science here. It wasn't until I went back home from my internship in Italy that I noticed that India was
            so colorful and full of life.
          </div>
        </div>
        )}

        {country === 'italy' && (
          <div className="p-3">
            <div className="title-small pb-2 text-uppercase">
              Italy
            </div>

            <div className="content-small">
              I currently live here. It's a breathtakingly beautiful country. I love the food, the language, the
              people, and am really fortunate to have found a wonderful job. I learn something new everyday. What I love
              about my city, Milan, is that it's very well geographically located. It's 30 minutes from the Italian Alps
              and 2 hours from the sea. The city is bustling with life, mixed cultures and very international. Besides,
              I met by girlfriend here.
            </div>
          </div>
        )}

        {country === 'switzerland' && (
          <div className="p-3">
            <div className="title-small pb-2 text-uppercase">
              Switzerland
            </div>

            <div className="content-small">
              I first went here on a day trip with one of my flatmates. We'd gone for a lunch, grabbed a couple of beers
              and got back home the same day. Been to Lugano Paradiso with my girlfriend, again on a day trip. The
              views are stunning. Never been here for over a day.
            </div>
          </div>
        )}

        {country === 'romania' && (
          <div className="p-3">
            <div className="title-small pb-2 text-uppercase">
              Romania
            </div>

            <div className="content-small">
              Romania felt a lot like India. Had gone on a solo trip to Bucharest in '17 for 4 days. The old town area
              was notably nice, I gotta say, Metal Jack is one crazy bar. This was the first time I'd seen a Russian
              Orthodox church.
            </div>
          </div>
        )}

        {country === 'denmark' && (
          <div className="p-3">
            <div className="title-small pb-2 text-uppercase">
              Denmark
            </div>

            <div className="content-small">
              Got my first tattoo here. It says 'ligevægt', which is Danish for equilibrium. Met some really interesting
              people here.
            </div>
          </div>
        )}

        {country === 'sweden' && (
          <div className="p-3">
            <div className="title-small pb-2 text-uppercase">
              Sweden
            </div>

            <div className="content-small">
              Been to Malmö and Stockholm. Took a ferry from Helsingborg (Sweden) to Helsingør (Denmark).
              I got to see Zlatan Ibrahimovic's house! WHAAAT!? The second time I visited was when I took a cruise ship
              from Helsinki (Finland) to Stockholm over the Baltic Sea.
            </div>
          </div>
        )}

        {country === 'france' && (
          <div className="p-3">
            <div className="title-small pb-2 text-uppercase">
              France
            </div>

            <div className="content-small">
              Went on a solo trip to Paris for over 4 days.
            </div>
          </div>
        )}

        {country === 'poland' && (
          <div className="p-3">
            <div className="title-small pb-2 text-uppercase">
              Poland
            </div>

            <div className="content-small">
              LALALA
            </div>
          </div>
        )}

        {country === 'finland' && (
          <div className="p-3">
            <div className="title-small pb-2 text-uppercase">
              Finland
            </div>

            <div className="content-small">
              Been to Imatra, Helsinki and Turku.
            </div>
          </div>
        )}

        {country === 'netherlands' && (
          <div className="p-3">
            <div className="title-small pb-2 text-uppercase">
              Netherlands
            </div>

            <div className="content-small">
              For work! Party!
            </div>
          </div>
        )}

        {country === 'usa' && (
          <div className="p-3">
            <div className="title-small pb-2 text-uppercase">
              United States of America
            </div>

            <div className="content-small">
              NY, DC, Seattle, Oregon.
            </div>
          </div>
        )}

        {country === 'germany' && (
          <div className="p-3">
            <div className="title-small pb-2 text-uppercase">
              Germany
            </div>

            <div className="content-small">
              Oktoberfest!
            </div>
          </div>
        )}

        {country === 'croatia' && (
          <div className="p-3">
            <div className="title-small pb-2 text-uppercase">
              Croatia
            </div>

            <div className="content-small">
              Solo trip.
            </div>
          </div>
        )}

        {country === 'slovenia' && (
          <div className="p-3">
            <div className="title-small pb-2 text-uppercase">
              Slovenia
            </div>

            <div className="content-small">
              Solo trip.
            </div>
          </div>
        )}

        {country === 'vatican' && (
          <div className="p-3">
            <div className="title-small pb-2 text-uppercase">
              Vatican City
            </div>

            <div className="content-small">
              Lorem.
            </div>
          </div>
        )}
      </div>
    );
  }
}

CountryCard.propTypes = {
  country: PropTypes.string.isRequired,
};

export default CountryCard;
