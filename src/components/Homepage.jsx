import React from 'react'
import millify from 'millify' //this forms up our numbers
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'

const { Title } = Typography

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10)
  const globalStats = data?.data?.stats

  if (isFetching) return 'loading...'
  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrency" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Capp" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Top 10 Cryptocurrencies</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Latest Cryto News </Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <News simplified/>
    </>
  )
} 

export default Homepage