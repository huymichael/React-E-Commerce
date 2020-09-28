import {createSelector} from 'reselect';

const selectDirector = state => state.directory;

export const selectDirectorySections = createSelector([selectDirector],
    directory => directory.sections);