// import React from 'react';

// class Todo extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             text:'',
//             items: ["FOLLOW", "the", "RABBIT"]
//         };
//         this.onChangeValue = this.onChangeValue.bind(this);
//         this.addItem = this.addItem.bind(this);
//     }

//     onChangeValue(e){
//         this.setState({text: e.target.value})
//     }

//     addItem(e){
//        this.state.items.push(this.state.text)
//        this.setState({text:''});
//     }

//     delClick(index){
//         this.state.items.splice(index, 1)
//         this.setState(this.state)
//     }
    
//     render() {
//         const {items} = this.state; 
//         const listItem = items.map((item, i) =>
//             <li key={i}>{item} <button onClick={this.delClick.bind(this, i)} style={{color:'red'}}>X</button></li>
//         );
//         return(
//             <div>
//                 <h1>To Do</h1>
//                 <ul>{listItem}</ul>
//                 <input type="text" value={this.state.text} onChange={this.onChangeValue}/>
//                 <br /><br />
//                 <button onClick={this.addItem}>add</button>
//             </div>
//         )
//     }
// }

// export default Todo;