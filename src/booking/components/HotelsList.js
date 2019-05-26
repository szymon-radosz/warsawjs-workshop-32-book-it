import React, { useEffect, useState } from 'react';
import { Item } from 'semantic-ui-react';
import HotelCard from './HotelCard';
import { ONLINE_URL, BEDS_TYPE } from '../../utils/const';

const HotelsList = ({ hotels, selectHotel }) => (
  <Item.Group divided>
    {hotels.map(hotel => (
      <HotelCard key={hotel.id} hotel={hotel} selectHotel={selectHotel} />
    ))}
  </Item.Group>
);

export default HotelsList;
