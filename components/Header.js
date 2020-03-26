import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from '../routes';

const colors = [
  'teal'
]

class ExampleMenu extends Component {
  static propTypes = {
    color: PropTypes.string,
  }

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { color } = this.props
    const { activeItem } = this.state

    return (
    <Menu color={color} inverted widths={3}>
      <Link route="/">
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
      </Link>

        <Menu.Item href="https://hackcovid19-nits.netlify.com/"
          name='Statistics'
          active={activeItem === 'Statistics'}
          onClick={this.handleItemClick}
        />

        <Menu.Item href="https://hackcovid19-nit-rishi135.hub.arcgis.com/"
          name='Symptoms and Precautions'
          active={activeItem === 'Symptoms and Precautions'}
          onClick={this.handleItemClick}
        />
    </Menu>
    )
  }
}

const MenuExampleColoredInvertedMenus = () => {
  const menus = colors.map((color) => <ExampleMenu color={color} key={color} />)

  return <div>{menus}</div>
}

export default MenuExampleColoredInvertedMenus
