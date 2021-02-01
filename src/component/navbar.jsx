import React, { PureComponent } from 'react'

 class Navbar extends PureComponent {
    render() {
        console.log('navbar');
        return (
            <nav className="navbar">
              <span>📝 Habit Checklist</span>
              <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        )
    }
}
export default Navbar;