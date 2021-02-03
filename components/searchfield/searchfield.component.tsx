import React, { ReactElement } from 'react';

type searchType = {
    otherProps: {
        className: string
    }
}

const SearchField = ({ otherProps }: searchType): ReactElement => {
    return (

        <input type="text"
            placeholder={'Choose'}
            {...otherProps}
        />
    );
};

export default SearchField;
