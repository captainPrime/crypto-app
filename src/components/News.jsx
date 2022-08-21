import React, { useState } from 'react'
import { Select, Avatar, Card, Typography, Row, Col, Statistic } from 'antd'
import moment from 'moment'

import { useGetNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'

const { Text, Title } = Typography
const { Option } = Select

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'
const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrencies')
  const { data } = useGetCryptosQuery(100)

  const { data: cryptoNews } = useGetNewsQuery({
    newsCategory, count: simplified ? 6 : 12
  })

  if (!cryptoNews?.value) return 'loading...'

  console.log(cryptoNews.value)
  return (
    <>
      <div style={{marginBottom: 20}}>
          {!simplified && (
        
        <Select
          showSearch className='select-news'
          placeholder="select a crypto"
          optionFilterProp='children'
          onChange={(value) => setNewsCategory(value)}
          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLocaleLowerCase()) >= 0}
        >

          <Option value='Cryptocurrencies'>Cryptocurrencies</Option>
          {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
        </Select>
        
      )}
    </div>
    <Row gutter={[24, 24]}>
      {
        cryptoNews.value.map((news, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card hoverable className='news-card'>
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className='news-title' level={4}>
                    {news.name}
                  </Title>

                  <img style={{ maxWidth: '200px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                </div>
                <p>
                  {
                    news.description > 100 ?
                      `${news.description.substring(0, 100)}...`
                      : news.description
                  }
                </p>
                <div className='provider-container'>
                  <div>
                    <Avatar src={news?.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                    <Text className='provide-name'> {news.provider[0]?.name}</Text>
                  </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))
      }
    </Row>
    </>
  )
}

export default News