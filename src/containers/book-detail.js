import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
    
    render(){
        if(!this.props.book){
            return(<div>Please select a book to get started!</div>);
        }
        return(<div>

           <h1> Book Details: </h1>
           <div>{this.props.book.title}</div>
           <div>{this.props.book.auther}</div>

            </div>);
    }
}

function  mapStateToProps(state){
    return {
        book: state.activeBook,
    };
}
export default connect(mapStateToProps)(BookDetail)