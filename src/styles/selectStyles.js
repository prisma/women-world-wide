// Theme
import theme from './theme'

// Select Styles
export default {
  menu: (provided) => ({
    ...provided,
    boxShadow: theme.cardShadow,
    borderRadius: 0
  }),
  singleValue: (provided) => ({
    ...provided,
    color: theme.black,
    padding: 2
  }),
  input: (provided) => ({
    ...provided,
    color: theme.black,
    fontSize: 24
  }),
  groupHeading: (provided) => ({
    ...provided,
    color: theme.gray,
    fontSize: 14,
    fontWeight: 600,
  }),
  control: (provided, state) => ({
    ...provided,
    width: 300,
    border: `none`,
    boxShadow: state.menuIsOpen ? `none` : theme.cardShadowSmall,
    borderRadius: 0,
    minHeight: `none`,
    background: state.menuIsOpen ? `transparent` : theme.white,
    fontSize: 24
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: `1px solid ${theme.lightGray}`,
    color: state.isSelected ? theme.white : theme.black,
    backgroundColor: state.isSelected ? theme.purple : state.isFocused ? theme.lightGray : theme.white,
    padding: `8px 12px`,
    fontSize: 16
  })
}