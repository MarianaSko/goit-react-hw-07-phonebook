import { useDispatch } from 'react-redux';
import { FilterWrapper, StyledLabel, StyledInput } from './Filter.styled';
import { setFilterAction } from '../../redux/phonebookSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
      <StyledInput
        type="text"
        id="filter"
        onChange={e => dispatch(setFilterAction(e.target.value))}
      />
    </FilterWrapper>
  );
};
