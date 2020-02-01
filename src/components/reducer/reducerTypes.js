export const setInitialStateReducer=(data)=>{
    return{
        type:'SET_INITIAL_STATE',
        data
    }
}

export const setStatus=()=>{
    return{
        type:'SET_STATUS',
    }
}

export const setUserCurrency=(userCurrency)=>{
    return{
        type:'SET_USER_CURRENCY',
        userCurrency
    }
}

export const setSelectedCurrencies=(selectedCurrencies)=>{
    return{
        type:'SET_SELECTED_CURRENCIES',
        selectedCurrencies
    }
}

export const setAutoSwitchLocation=()=>{
    return{
        type:'SET_AUTO_SWITCH_LOCATION'
    }
}

export const setShowCurrencySymbol=()=>{
    return{
        type:'SET_SHOW_CURRENCY_SYMBOL'
    }
}

export const setDisplayPosition=(display_position)=>{
    return{
        type:'SET_DISPLAY_POSITION',
        display_position
    }
}

export const setShowInDesktop=()=>({
    type:'SET_SHOW_IN_DESKTOP'
})

export const setShowInMobile=()=>({
    type:'SET_SHOW_IN_MOBILE'
})

export const setShowOriginalPriceOnMouseHover=()=>({
    type:'SET_SHOW_ORIGINAL_PRICE_ON_MOUSE_HOVER'
})

export const setCartNotificationStatus=()=>({
    type:'SET_CART_NOTIFICATION_STATUS'
})

export const setCartNotificationMessage=(cartNotificationMessage)=>({
    type:'SET_CART_NOTIFICATION_MESSAGE',
    cartNotificationMessage
})

export const setCartNotificationDesignType=(cartNotificationDesignType)=>({
    type:'SET_CART_NOTIFICATION_DESIGN_TYPE',
    cartNotificationDesignType
})

export const setRoundPriceStatus=()=>({
    type:'SET_PRICE_ROUND_STATUS'
})

export const setRoundingDeciaml=(roundingDecimal)=>({
    type:'SET_REDUCING_DECIMAL',
    roundingDecimal
})

export const setIntegrateWithOtherApps=()=>({
    type:'SET_INTEGRATE_WITH_OTHER_APPS'
})

export const setThemeType=(themeType)=>({
    type:'SET_THEME_TYPE',
    themeType
})

export const setBackgroundColor=(backgroundColor)=>({
    type:'SET_BACKGROUND_COLOR',
    backgroundColor
})

export const setTextColor=(textColor)=>({
    type:'SET_TEXT_COLOR',
    textColor
})

export const setHoverColor=(hoverColor)=>({
    type:'SET_HOVER_COLOR',
    hoverColor
})
