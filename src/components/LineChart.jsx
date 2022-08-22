import React from 'react'
import {Line} from 'react-chartjs-2'
import { Col, Row, Typography } from 'antd'

const { Text, Title } = Typography

function LineChart({coinHistory, currentPrice, coinName}) {
  return (
    <div>
        <Row className='chart-header'>
            <Title level={2} className='chart-title'>
                {coinName} Price Chart
            </Title>
            <Col className='price-container'>
            <Title level={5} className='price-change'>
                {coinHistory?.data.change} %
            </Title>
            <Title level={5} className='current-price'>
                {coinName} Price : ${currentPrice}
            </Title>
            </Col>
        </Row>
    </div>
  )
}

export default LineChart