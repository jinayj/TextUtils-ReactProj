import React, { Component } from 'react';

class Counter extends Component {
    
    state = {
        count: 10,
        tags : ["tag1","tag2","tag3"],

        toggle : () =>{
            if(this.state.count !=0)
            {
                this.state.count++
            }

        },
        toggledown :() =>{
            this.state.count--;
        }

    };
    render() { 

        let classes = this.getBadgeName();
        return <React.Fragment><div><span className={classes} style={{fontSize:30}}>{this.formatcount()}</span>
        <button className='btn btn-secondary btn-sm' onClick={() => this.toggle()}>increment</button>
        <button className='btn btn-secondary btn-sm'>decrement</button>
        <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        

        </div></React.Fragment>;

    }

    getBadgeName() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatcount()
    {
        const {count} = this.state;
        return count ===0 ? "zero" : count;
    }
}
 
export default Counter;