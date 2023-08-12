import { Stack } from '@mui/material';
import { categories } from '../utils/constants';
import { CategoryRounded } from '@mui/icons-material';
import createTypography from '@mui/material/styles/createTypography';

const Sidebar = ({ selectedCategory, setselectCategory }) => (
  <Stack
    direction='row'
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}
  >
    {categories.map((category) => (
      <button
        className='category-btn'
        // store the category of video here when click on that button
        onClick={() => {
          setselectCategory(category.name);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '20px',
          // margin: '5px 0px',
          color: 'white',
          background: category.name === selectedCategory && '#FC1503',
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? 'white' : 'red',
            marginLeft: '15px',
            marginRight: '10px',
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
