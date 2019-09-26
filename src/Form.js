import React from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input,Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import {connect} from 'react-redux';

  


 class LoginForm extends React.Component{
     constructor(props){
         super(props);
         this.state={
             email:'',
             password:'',
             modal:false
         }
     }
     toggle=()=> {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
     handleChange=(event)=>{
        console.log("wanted1",event.target.name);
        this.setState({[event.target.name]: event.target.value})
     }
   handleSubmit=()=>{
       if(this.state.email === this.props.username && this.state.password === this.props.password){
        this.props.history.push('/dashboard')
       }
       else{
           this.toggle();
           this.setState({email:'',password:''})
       }
       
   }  
   render(){
       console.log("wanted",this.state)
     return(
        <div>
      <Form className='formcontainer'>
      <FormGroup>
        <Label >Email</Label>
        <Input type="email" name="email"  placeholder="email"
        value={this.state.email} onChange={this.handleChange} />
      </FormGroup>
      <FormGroup>
        <Label >Password</Label>
        <Input type="password" name="password"  placeholder="password" 
        value={this.state.password} onChange={this.handleChange}/>
      </FormGroup>
      <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
       <Modal isOpen={this.state.modal} toggle={this.toggle} >
       <ModalHeader toggle={this.toggle}>Invalid Credentials</ModalHeader>
       <ModalBody>
         Please enter valid  details and try again
       </ModalBody>
       <ModalFooter>
         <Button color="primary" onClick={this.toggle}>OK</Button>{' '}
         </ModalFooter>
     </Modal>
     </div>
     )
    
   }
 }
const mapStateToProps=(state)=>{
    return{
users:state.Loginreducer.users,
username:state.Loginreducer.username,
password:state.Loginreducer.password

}
}
const mapDispatchToProps=(dispatch)=>{
return{
    // submit:()=>dispatch(submit()),
}
}
 export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);