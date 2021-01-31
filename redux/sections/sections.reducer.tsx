import {sectionActionTypes} from './sections.types'; 

const initialState = {
    currentSection:[],
};

export const sectionReducer = (state=initialState,action) =>{
    switch(action.type){
        case sectionActionTypes.SECTION_ACTION_TYPES:
            return{
                ...state,
                currentSection:action.payload,
            };

            default:
                return state;
    }
};
