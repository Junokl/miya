import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Hfooter extends Component {
    constructor(props) {
        super(props);
<<<<<<< HEAD
        // console.log(props)
=======
>>>>>>> 1ade7f89e342e7d3b8430212b929ad2d615d783b
        this.props = props;
        // console.log(props);
        this.state = {
            nav: 0,
            navs: [
                { title: "首页", href: "/home/", channel: "1", imgsrc: 'https://img.miyabaobei.com/d1/p4/2016/09/18/fb/a0/fba006d51eb091cf3b63299c59d5e38c813134250.png' },
                { title: "分类", href: "/list/", channel: "2", imgsrc: 'https://img.miyabaobei.com/d1/p5/2016/09/18/90/f1/90f1f82889b47a8de835621452eed22e790295573.png' },
                { title: "购物车", href: "/car/", channel: "3", imgsrc: 'https://img.miyabaobei.com/d1/p4/2016/09/18/88/4e/884e4655e40f2c8e0ad9463a52de7546790508785.png' },
                { title: "我的", href: "/my/", channel: "4", imgsrc: 'https://img.miyabaobei.com/d1/p5/2016/09/18/83/b5/83b56a7715f4c3184b5fc141a6a66435790687263.png' }
            ]
        }
    }
    gotopath(index, e) {
        // console.log(index);
        this.setState({
            nav: index
        })
        // this.props.dispatch.push(this.state.navs[index].href)
    }
    getlist(index,e){
        // console.log(index);
        
        // for(var i=0;i<this.state.navs.length;i++){
            console.log(this.props)
            this.props.togglelist(true,false) 
            // if(this===1){
            //     console.log(6666);
            //     this.props.toggleList.bind(this,this.props.showlist);
                
            // }
        // }
        console.log(this)
        
        // console.log(this.props.showlist)
    }
    render() {
        return (
            <div className="footerNav">
                <ul className="tab5">
                    {
                        (() => {
                            return this.state.navs.map((item, index) => {
                                return (
<<<<<<< HEAD

                                    <li className="cur" key={index}>
=======
                                    <li key={index} className="cur" onClick={this.getlist.bind(this,index)}
                                    >
>>>>>>> 1ade7f89e342e7d3b8430212b929ad2d615d783b
                                        <Link to={{ pathname: `${item.href}` }} replace key={index}
                                           >
                                            <img src={item.imgsrc} cursrc={item.imgsrc} alt='' />
                                            <span className='f-title'>{item.title}</span>
                                        </Link>
                                    </li>

                                )

                            })
                        })()
                    }

                </ul>
            </div>
        )
    }
}
export default connect((state) => {
    // console.log(state)
    return state;
}, (dispatch) => {
    return {
        togglelist(bol,dol) {
            dispatch({
                type: 'togglelist',
                showlist: {
                    isShowlist: bol,
                    isShowlists: dol
                }

            })
        }
    }
})(Hfooter);