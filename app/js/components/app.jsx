import React, {Component} from 'react'
import Home from './home'
import Toolbar from 'react-md/lib/Toolbars';
import { Button } from 'react-md/lib/Buttons';

class App extends Component {
	render () {
    // Nav.
		const nav = <Button key="nav" icon>menu</Button>;
		const actions = [<Button key="search" icon>search</Button>];
		return (
			<div>
        <h1>Home</h1>
        <div className="toolbar-group">
        <Toolbar
          colored
          title="Colored"
          nav={nav}
          actions={actions}
        />
      </div>
				<Home as="counterOne"/>
				<Home as="counterTwo"/>
				<Home as="counterThree"/>
				<Home as="counterFour"/>
			</div>
		)
	}
}

export default App
