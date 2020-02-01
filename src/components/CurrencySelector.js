import React,{ useContext } from 'react';
import {Tabs,Typography,Row,Col,Select,Switch,Button} from 'antd';
import {Subheading} from '@shopify/polaris'
import {userContext} from './Container';
import {setSelectedCurrencies,
    setAutoSwitchLocation,
    setShowCurrencySymbol
    } 
    from './reducer/reducerTypes'
import ThemeCustomisation from './ThemeCustomisation';
import {currencies} from './reducer/totalCurrencies';

const {TabPane}=Tabs;
const {Text}=Typography;
const {Option}=Select;

function CurrencyConverter(){
    const userData=useContext(userContext);
    
    const handleChangeSelectCurrency=(value)=>{
        userData.dispatch(setSelectedCurrencies(value));
    }
    return(
        <div className='currencySelector-main'>
        <Tabs>
            <TabPane tab={<Text strong>General</Text>} key="1">
                <Row>
                    <Col span={6}
                    className='currencySelector-text'
                    >
                    <Subheading>Select currencies:</Subheading>
                    </Col>
                    <Col span={3} className='currencySelector-selectall'>
                    <Button block
                    onClick={()=>{
                        userData.dispatch(setSelectedCurrencies(currencies));
                    }}
                    >Select All</Button>
                    </Col>
                    <Col span={15}>
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        value={userData.state.selectedCurrencies}
                        onChange={handleChangeSelectCurrency}
                    >
                    {currencies.map((currency)=>{
                        return(
                            <Option key={currency}>{currency}</Option>
                            )
                    })}
                    </Select>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} className='currencySelector-Switches-text'>
                    <Subheading>Auto Switch currency based on Location:</Subheading>
                    </Col>
                    <Col span={4} className='currencySelector-Switches'>
                    <Switch checkedChildren="on" 
                        size="small" 
                        unCheckedChildren="off" 
                        className='Status-switch' 
                        checked={userData.state.autoSwitchCurrencyLocationBased}
                        onChange={()=>{
                            userData.dispatch(setAutoSwitchLocation());
                        }}
                     />
                    </Col>
                </Row>
                <Row>
                    <Col span={20} className='currencySelector-Switches-text'>
                    <Subheading>show currency symbol:</Subheading>
                    </Col>
                    <Col span={4} className='currencySelector-Switches'>
                    <Switch checkedChildren="on" 
                        size="small" 
                        unCheckedChildren="off" 
                        className='Status-switch' 
                        checked={userData.state.showCurrencySymbol}
                        onChange={()=>{
                            userData.dispatch(setShowCurrencySymbol());
                        }}
                     />
                    </Col>
                </Row>
            </TabPane>
            <TabPane tab={<Text strong>Theme</Text>} key="2">
                <ThemeCustomisation/>
            </TabPane>
        </Tabs>
        </div>
    )
}
export default CurrencyConverter;