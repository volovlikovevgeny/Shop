import {sectionActionTypes} from './sections.types';

export const fetchSections = () =>async dispatch =>{

    const response = await fetch('http://localhost:4001/categories');
    const data = await response.json();

    dispatch({
        type:sectionActionTypes.SECTION_ACTION_TYPES,
        payload:data,
    });
};
