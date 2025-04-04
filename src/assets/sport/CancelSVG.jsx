import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const CancelSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M12 1.5C6.15 1.5 1.5 6.15 1.5 12S6.15 22.5 12 22.5 22.5 17.85 22.5 12 17.85 1.5 12 1.5Zm4.05 15.75L12 13.2l-4.05 4.05-1.2-1.2L10.8 12 6.75 7.95l1.2-1.2L12 10.8l4.05-4.05 1.2 1.2L13.2 12l4.05 4.05-1.2 1.2Z"
        />
    </Svg>
);
export default CancelSVG;
