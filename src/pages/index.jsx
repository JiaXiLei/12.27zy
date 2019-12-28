import React from 'react';
// import { render } from 'react-dom';

import './style.less'
// import axios from 'axios'
import { data1, data3 } from './data.js'

export default class Count extends React.Component {

    componentDidMount() {

    }

    color = () => {
        const a = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        const c = Math.floor(Math.random() * 256)
        return 'rgba(' + a + ',' + b + ',' + c + ', 0.5 )'
    }
    hisTo = option => {
        if (option === 0) {
            
        }
    }
    render() {
        console.log(data3)
        return (
            <div className='pages-count'>
                <header>
                    <div className='header-input'>
                        <p>北京<img src="img/select.png" alt="" /></p>
                        <p><input type="text" placeholder='请输入商家名' /></p>
                        <p><img src="https://p0.meituan.net/travelcube/641521461179df7cfb88738dd1ea11ec1031.png" alt="" /></p>
                    </div>
                    <div>
                        <p><img src="img/download.png" alt="" /></p>
                        <p>
                            <span>省钱利器 购物插值算</span>
                            <span>吃喝玩乐竟在美团</span>
                        </p>
                        <p>去APP</p>
                    </div>
                    <div className='header-title'>
                        <div>
                            {
                                data1.map((res, key) => {
                                    return (
                                        <dl key={key} onClick={() => { this.hisTo(res.id) }}>
                                            <dt style={{ background: this.color() }} className={'iconfont ' + res.icon}></dt>
                                            <dd>{res.name}</dd>
                                        </dl>
                                    )
                                })
                            }
                        </div>
                        {/* <div>
                            {
                                data2.map((res, key) => {
                                    return (
                                        <dl key={key}>
                                            <dt style={{ background: this.color() }} className={'iconfont ' + res.icon}></dt>
                                            <dd>{res.name}</dd>
                                        </dl>
                                    )
                                })
                            }
                        </div> */}
                    </div>
                </header>
                <section>
                    <h3>猜你喜欢</h3>
                    <div>
                        {
                            data3.data.map((res, key) => {
                                return (
                                    <dl key={key}>
                                        <dt><img src={res.img} alt="" /></dt>
                                        <dd>
                                            <div>
                                                <p>{res.name}</p>
                                                <p>{res.title}</p>
                                            </div>
                                            <div>
                                                <p>
                                                    <span>{res.price}元</span>
                                                    <span>门市价：{res.prices}元</span>
                                                </p>
                                                <span>已售{res.sales}</span>
                                            </div>
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



