 import React, { Component } from 'react';

 
 class SelectedUsersList extends Component {
   render() {
     const { users } = this.props;
     return (
       <ul>
         {users.map((user) => (user.isSelected? <li>{ user.name}</li> : null ))}
       </ul>
     );
   }
 }
   
 export default SelectedUsersList;
 