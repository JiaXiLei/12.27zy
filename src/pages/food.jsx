import React from 'react';
// import { render } from 'react-dom';

import './style.less'
// import axios from 'axios'
import { data1, data4 } from './data.js'

export default class Food extends React.Component {

    componentDidMount() {
        const divScroll = document.querySelector('.scroll')
        const divin = document.querySelector('.header-input')

        divScroll.addEventListener('scroll', () => {
            if (divScroll.scrollTop >= 100) {

                divin.style = 'background:rgba(255, 255, 255, 1)'
            } else {
                divin.style = 'background: rgba(255, 255, 255, 0)'
            }
        })
        // console.log(divScroll)
    }
    color = () => {
        const a = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        const c = Math.floor(Math.random() * 256)
        return 'rgba(' + a + ',' + b + ',' + c + ', 0.5 )'
    }
    render() {
        console.log(data4)
        return (
            <div className='pages-food'>
                <header>
                    <div className='header-input'>
                        <p className="iconfont icon-fanhui1"></p>
                        <p><input type="text" placeholder='请输入商家名' /></p>
                        <p><img src="https://p0.meituan.net/travelcube/641521461179df7cfb88738dd1ea11ec1031.png" alt="" /></p>
                    </div>
                    <div>

                    </div>
                </header>
                <section className='scroll'>
                    <div className='sce-img'>
                        <img src="//s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@5b5269e" alt="" />
                    </div>
                    <div className='header-title'>
                        <div>
                            {
                                data1.map((res, key) => {
                                    return (
                                        <dl key={key}>
                                            <dt style={{ background: this.color() }} className={'iconfont ' + res.icon}></dt>
                                            <dd>{res.name}</dd>
                                        </dl>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='sec-cont'>
                        {
                            data4.map((res, key) => {
                                return (
                                    <dl key={key}>
                                        <dt><img src={res.imgurl} alt="" /></dt>
                                        <dd>
                                            <p>{res.name}</p>
                                            <p>
                                                <span>￥{res.price}/人</span>
                                                <span>{res.dizhi}</span>
                                            </p>
                                        </dd>
                                    </dl>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        )
    }
}



