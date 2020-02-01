import React,{ useContext } from 'react';
import { Row,Col,Radio,Popover,Button } from 'antd';
import {TextStyle} from '@shopify/polaris';
import {userContext} from './Container';
import {setThemeType,
    setBackgroundColor,
    setTextColor,
    setHoverColor
} from './reducer/reducerTypes';
import {CirclePicker} from 'react-color';

function ThemeCustomisation(){
    const userData=useContext(userContext);
    const contentBackground = (
        <div className='theme-customisation-colorpicker'>
        <CirclePicker
        onChangeComplete={(color,event)=>{
            //console.log(color.hex);
            userData.dispatch(setBackgroundColor(color.hex));
        }}
        />
    </div>
    );
    const contentText = (
        <div className='theme-customisation-colorpicker'>
        <CirclePicker
        onChangeComplete={(color,event)=>{
            //console.log(color.hex);
            userData.dispatch(setTextColor(color.hex));
        }}
        />
    </div>
    );
    const contentHover = (
        <div className='theme-customisation-colorpicker'>
        <CirclePicker
        onChangeComplete={(color,event)=>{
            //console.log(color.hex);
            userData.dispatch(setHoverColor(color.hex));
        }}
        />
    </div>
    );
    return(
        <div className='theme-customisation-main'>
        <Row>
        <Col span={8}>
            <Row>
            <Col span={24} className='theme-customisation-theme-selection'>
                <TextStyle variation="strong">
                Currency Box Theme
                </TextStyle><br/>
                <Radio.Group name="radiogroup" 
                defaultValue={userData.state.themeType} 
                className='theme-customisation-radio'
                onChange={(value)=>{
                    userData.dispatch(setThemeType(value.target.value));
                }}
                >
                    <Radio value='theme1' className='theme-customisation-radio-item'>Theme 1</Radio>
                    <Radio value='theme2' className='theme-customisation-radio-item'>Theme 2</Radio>
                </Radio.Group>
            </Col>
            </Row>
            <Row>
            <Col span={24} className='theme-customisation-set'>
                <TextStyle variation="strong">
                Theme Customisation
                </TextStyle><br/>
                <Row className='theme-customisation-single-row'>
                    <Col span={8}>
                        <TextStyle variation="strong">
                        Background Color:
                        </TextStyle>
                    </Col>
                    <Col span={16}>
                    <Popover placement="bottom"  content={contentBackground} trigger="click">
                    <Button block
                    style={{backgroundColor:`${userData.state.backgroundColor}`,
                            color:'white'}}
                    >
                    {userData.state.backgroundColor}   
                    </Button>
                    </Popover>
                    </Col>
                </Row>
                <Row className='theme-customisation-single-row'>
                    <Col span={8}>
                        <TextStyle variation="strong">
                        Text Color:
                        </TextStyle>
                    </Col>
                    <Col span={16}>
                    <Popover placement="bottom"  content={contentText} trigger="click">
                    <Button block
                    style={{backgroundColor:`${userData.state.textColor}`,
                            color:'white'}}
                    >
                    {userData.state.textColor}   
                    </Button>
                    </Popover>
                    </Col>
                </Row>
                <Row className='theme-customisation-single-row'>
                    <Col span={8}>
                        <TextStyle variation="strong">
                        Text Color:
                        </TextStyle>
                    </Col>
                    <Col span={16}>
                    <Popover placement="bottom"  content={contentHover} trigger="click">
                    <Button block
                    style={{backgroundColor:`${userData.state.hoverColor}`,
                            color:'white'}}
                    >
                    {userData.state.hoverColor}   
                    </Button>
                    </Popover>
                    </Col>
                </Row>
            </Col>
            </Row>
        </Col>
        <Col span={16} className='theme-customisation-preview'>
            <TextStyle variation="strong">
                Preview
            </TextStyle>
        </Col>
        </Row>
        </div>
    )
}

export default ThemeCustomisation;