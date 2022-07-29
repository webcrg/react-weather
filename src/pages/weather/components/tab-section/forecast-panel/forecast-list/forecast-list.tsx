import React from 'react';
import { useSelector } from 'react-redux';
import { ForecastItem } from './forecast-item';
import * as selectors from '@/redux/selectors';
import { IforecastItem } from '@/types';

function ForecastList() {
  const forecast = useSelector(selectors.forecast);

  return (
    <div className="tab-forecast__forecast-list">
      {forecast.map((item: IforecastItem) => (
        <ForecastItem key={item.date + item.time} info={item} />
      ))}
    </div>
  );
}

export { ForecastList };
