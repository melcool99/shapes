import React, { Component } from 'react'
import { Graphics, Container } from '@inlet/react-pixi'
import { Ticker } from '@pixi/ticker'

const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1)

const ticker = new Ticker()

class Square extends Component {
  constructor(props) {
    super(props)
    this.appW = props.appWidth
    this.appH = props.appHeight
    this.width = 60
    this.height = 60
    this.state = {
      count: 0,
      y: 0,
      x: randomIntFromInterval(0, 600),
      visible: true,
      color: Math.random() * 0xffffff,
    }
  }

  handleClick = () => {
    this.setState({ visible: false })
  }

  animate = (delta) => {
    this.setState((state) => ({
      y: state.y + 3 * delta,
    }))
  }

  componentDidMount() {
    ticker.start()
    ticker.add(this.animate)
  }

  componentWillUnmount() {
    ticker.remove(this.animate)
  }

  render() {
    return (
      <>
        <Container height={this.appH} width={this.appW}>
          <Graphics
            draw={(g) => {
              g.clear()
              g.beginFill(this.state.color)
              g.drawRect(this.state.x, this.state.y, this.width, this.height)
              g.endFill()
            }}
          />
        </Container>
      </>
    )
  }
}

export default Square
