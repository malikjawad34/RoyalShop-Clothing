import React from 'react' 
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles'

const WithSpinner = WrappedComponenet => {
    const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) :
    (<WrappedComponenet {...otherProps} />)
}
 return Spinner;
}

export default WithSpinner;