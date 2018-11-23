import React, { Component } from 'react';
import { Grid, Card, WingBlank, WhiteSpace } from 'antd-mobile';

import {
    Link
  } from 'react-router-dom';
  
class Index extends Component {
    constructor(props) {
        super(props);

        this.openPage = this.openPage.bind(this);
    }


    openPage(v) {
               console.log(v)
              console.log(this.props)
            //   this.props.history.push("details/"+v.text);
              this.props.history.goBack();

    }

    render() {
        const data = Array.from(new Array(9)).map((_val, i) => ({
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: `name${i}`,
        }));

        var self = this
        return (
            <div>
                <div>
                    <WingBlank size="lg">
                        <WhiteSpace size="lg" />
                        <Card.Header
                            title="This is title"
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            extra={<div>this is extra</div>}
                        />
                        <WhiteSpace size="lg" />
                    </WingBlank>

                </div>
                <Grid data={data} activeStyle={false} onClick={_el => {
                    self.openPage(_el)
                }} />
                <Link to="/login"> shou</Link>
            </div>
        )
    }

}

export default Index