import * as React from 'react';
import './SearchBox.css';
import Button from '../Button';

type Props = {
  lodestoneId: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBox: React.FC<Props> = (props) => {
  const { lodestoneId, handleChange } = props;
  return (
    <div>
      <label>
        Lodestone ID：
        <input type="text" value={lodestoneId} onChange={handleChange} />
      </label>
      <Button lodestoneId={lodestoneId} />
    </div>
  );
};
