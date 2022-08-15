import React from 'react'
import {Select, Avatar, Card, Typography, Row, Col, Statistic } from 'antd'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { useGetNewsQuery } from '../services/cryptoNewsApi'

const {Text, Title} = Typography
const {Option} =Select

const News = ({simplified}) => {

  const {data: cryptoNews} = useGetNewsQuery({
    newsCategory: 'Crpytocurrency', count: simplified ? 10: 100
  })

  console.log(cryptoNews)
  return (
    <div>News</div>
  )
}

export default News