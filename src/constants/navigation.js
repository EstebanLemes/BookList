import React from 'react'
import { black, white } from '@constants/colors';
import CustomSwitch from '@components/CustomSwitch';

export const defaultNavOptions = (isLightTheme) => ({
    headerStyle: {
        backgroundColor: isLightTheme ? black : white,
    },
    headerTintColor: isLightTheme ? white : black,
    headerRight: () => <CustomSwitch />
});