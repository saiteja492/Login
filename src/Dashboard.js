import React from 'react';
import './App.css';
import { Card ,Row,Col,CardDeck,CardTitle} from 'reactstrap';
import {connect} from 'react-redux';

class Dashboard extends React.Component{
     
   render(){
    return(
        <div className='dashboardContainer'>
            <Row>
            
                { this.props.users.map(item=>(<Col sm='5' className='cardDetail'>
                                              <Card body inverse color="primary" >
                                                <CardTitle>person:{item.id}</CardTitle>
                                                <div>id:{item.id}</div>
                                                <div>name:{item.name}</div>
                                                <div>age:{item.age}</div>
                                                <div>gender:{item.gender}</div>
                                                <div>email:{item.email}</div>
                                                <div>{item.phoneNo}</div>
                                             </Card>
           
                                        </Col>))}

            </Row>
        </div>
        

    )
   }
 }
const mapStateToProps=(state)=>{
    return{
users:state.Loginreducer.users,

}
}
const mapDispatchToProps=(dispatch)=>{
return{
    // submit:()=>dispatch(submit()),
}
}
 export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);