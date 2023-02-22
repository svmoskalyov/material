import PropTypes from 'prop-types';
import { Material } from 'components/Material/Material';
import { List, Item, Num } from './MaterialList.styled';

export const MaterialList = ({ items, ...otherProps }) => {
  return (
    <List>
      {items.map((item, index) => (
        <Item key={item.id}>
          <Num>{index + 1 + ')'} </Num>
          <Material item={item} {...otherProps} />
        </Item>
      ))}
    </List>
  );
};

MaterialList.propTypes = {
  items: PropTypes.array.isRequired,
};
