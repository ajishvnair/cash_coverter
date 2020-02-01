import React, {useContext} from 'react';
import {Typography,Row,Col,Select,Switch} from 'antd';
import {Subheading} from '@shopify/polaris';
import {setDisplayPosition,
    setShowInDesktop,
    setShowInMobile,
    setShowOriginalPriceOnMouseHover,
    setCartNotificationStatus,
    setCartNotificationMessage
    } 
    from '../components/reducer/reducerTypes';
import {userContext} from './Container';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const {Text}=Typography;
const {Option}=Select;

function DisplayBoxComponent(){
    
    const userData=useContext(userContext);
    return(
        <div className='display-box currencySelector-main'>
            <Row >
                <Col span={12} className='display-box-display'>
                    <Row className='display-box-heading'>
                        <Col span={24}>
                        <Text strong>Display</Text>
                        </Col>
                    </Row>
                    <Row className='display-box-display-content'>
                        <Col span={12} className='currencySelector-text'>
                        <Subheading>position to display currency changer:</Subheading>
                        </Col>
                        <Col span={12} className='display-box-positionSelector'>
                        <Select
                            style={{ width: 120 }}
                            optionFilterProp="children"
                            value={userData.state.display_position}
                            onChange={(value)=>{
                                userData.dispatch(setDisplayPosition(value))
                            }}
                            >
                            <Option value="Top Right">Top Right</Option>
                            <Option value="Top Left">Top Left</Option>
                            <Option value="Bottom Right">Bottom Right</Option>
                            <Option value="Bottom Left">Bottom Left</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} className='currencySelector-text'>
                        <Subheading>show in desktop:</Subheading>
                        </Col>  
                        <Col span={12} className='currencySelector-switch'>
                            <Switch checkedChildren="on" 
                            size="small" 
                            unCheckedChildren="off" 
                            className='Status-switch'
                            checked={userData.state.showInDesktop}
                            onChange={()=>{
                                userData.dispatch(setShowInDesktop())
                            }} 
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} className='currencySelector-text'>
                        <Subheading>show in Mobile device:</Subheading>
                        </Col>  
                        <Col span={12} className='currencySelector-switch'>
                            <Switch checkedChildren="on" 
                            size="small" 
                            unCheckedChildren="off" 
                            className='Status-switch'
                            checked={userData.state.showInMobileDevice}
                            onChange={()=>{
                                userData.dispatch(setShowInMobile())
                            }} 
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} className='currencySelector-text'>
                        <Subheading>show original price on mouse hover:</Subheading>
                        </Col>  
                        <Col span={12} className='currencySelector-switch'>
                            <Switch checkedChildren="on" 
                            size="small" 
                            unCheckedChildren="off" 
                            className='Status-switch'
                            checked={userData.state.showOriginalPriceOnMouseHover}
                            onChange={()=>{
                                userData.dispatch(setShowOriginalPriceOnMouseHover())
                            }} 
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={12} className='notification-box'>
                    <Row className='display-box-heading'>
                    <Col span={24}>
                    <Text strong>Notification</Text>
                    </Col>
                    </Row>
                    <Row className='display-box-display-content'>
                        <Col span={12} className='currencySelector-text'>
                            <Subheading>Display cart notification:</Subheading>
                        </Col>
                        <Col span={12} className='currencySelector-switch'>
                            <Switch checkedChildren="on" 
                            size="small" 
                            unCheckedChildren="off" 
                            className='Status-switch'
                            checked={userData.state.cartNotificationStatus}
                            onChange={()=>{
                                userData.dispatch(setCartNotificationStatus())
                            }} 
                            />
                        </Col>  
                    </Row>
                    <Row className='notification-switch-info'>
                    <p>Show checkout currency notification in cart</p>
                    </Row>
                    <Row>
                    <Col span={24} className='notification-editor'>
                    <CKEditor
                    editor={ ClassicEditor }
                    data={userData.state.cartNotificationMessage}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        userData.dispatch(setCartNotificationMessage(data));
                    } }
                    />
                    </Col>
                    </Row>
                </Col>
            </Row>
            
        </div>
    )
}
export default DisplayBoxComponent;
           