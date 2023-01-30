import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React, { FC, useEffect } from 'react';
import {
  selectTags,
  selectTagsLoading,
} from '../../redux/selectors/tagsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from '@reach/router';
import Loader from '../Common/Loader';
import { categoryPath } from '../../utils/paths';
import { fetchTags } from '../../redux/actions/recipe/tagsActions';
import { muiStylesCategoryList } from './muiStylesCategoryList';

const CategoryList: FC = () => {
  const dispatch = useDispatch();

  const tags = useSelector(selectTags);
  const loading = useSelector(selectTagsLoading);

  useEffect(() => {
    if (!tags) {
      dispatch(fetchTags());
    }
  }, [dispatch, tags]);

  return (
    <>
      {loading ? (
        <Loader loading />
      ) : (
        <List sx={muiStylesCategoryList.container}>
          {tags?.map((tag) => (
            <Link
              key={tag}
              to={`${categoryPath}/${tag}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItem disablePadding>
                <ListItemButton component='a'>
                  <ListItemText primary={tag} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      )}
    </>
  );
};

export default CategoryList;
