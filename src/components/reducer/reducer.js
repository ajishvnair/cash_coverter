export const reducer=(state,action)=>{
    switch(action.type){
        case 'SET_INITIAL_STATE':
            return action.data;
        case 'SET_STATUS':
            return{
                ...state,
                status:!state.status
            }
        case 'SET_USER_CURRENCY':
            return{
                ...state,
                userCurrency:action.userCurrency
            }
        case 'SET_SELECTED_CURRENCIES':
            return{
                ...state,
                selectedCurrencies:action.selectedCurrencies
            }
        case 'SET_AUTO_SWITCH_LOCATION':
            return{
                ...state,
                autoSwitchCurrencyLocationBased:!state.autoSwitchCurrencyLocationBased
            }
        case 'SET_SHOW_CURRENCY_SYMBOL':
            return{
                ...state,
                showCurrencySymbol:!state.showCurrencySymbol
            }
        case 'SET_DISPLAY_POSITION':
            return{
                ...state,
                display_position:action.display_position
            }
        case 'SET_SHOW_IN_DESKTOP':
            return{
                ...state,
                showInDesktop:!state.showInDesktop
            }
        case 'SET_SHOW_IN_MOBILE':
            return{
                ...state,
                showInMobileDevice:!state.showInMobileDevice
            }
        case 'SET_SHOW_ORIGINAL_PRICE_ON_MOUSE_HOVER':
            return{
                ...state,
                showOriginalPriceOnMouseHover:!state.showOriginalPriceOnMouseHover
            }
        case 'SET_CART_NOTIFICATION_STATUS':
            return{
                ...state,
                cartNotificationStatus:!state.cartNotificationStatus
            }
        case 'SET_CART_NOTIFICATION_MESSAGE':
            return{
                ...state,
                cartNotificationMessage:action.cartNotificationMessage
            }
        case 'SET_CART_NOTIFICATION_DESIGN_TYPE':
            return{
                ...state,
                cartNotificationDesignType:action.cartNotificationDesignType
            }
        case 'SET_PRICE_ROUND_STATUS':
            return{
                ...state,
                roundPriceStatus:!state.roundPriceStatus
            }
        case 'SET_REDUCING_DECIMAL':
            return{
                ...state,
                roundingDecimal:action.roundingDecimal
            }
        case 'SET_INTEGRATE_WITH_OTHER_APPS':
            return{
                ...state,
                integreteWithOtherApps:!state.integreteWithOtherApps
            }
        case 'SET_THEME_TYPE':
            return{
                ...state,
                themeType:action.themeType
            }
        case 'SET_BACKGROUND_COLOR':
            return{
                ...state,
                backgroundColor:action.backgroundColor
            }
        case 'SET_TEXT_COLOR':
            return{
                ...state,
                textColor:action.textColor
            }
        case 'SET_HOVER_COLOR':
            return{
                ...state,
                hoverColor:action.hoverColor
            }
        default:
            return state
    }
}