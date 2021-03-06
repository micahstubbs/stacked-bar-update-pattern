d3.json('stacked-datasets.json', (error, datasets) => {
  const seriesKeys = 'abcdef'.split('')
  const xVariable = 'name'

  const color = d3.scaleOrdinal([
    '#66c2a5',
    '#fc8d62',
    '#8da0cb',
    '#e78ac3',
    '#a6d854',
    '#ffd92f'
  ])

  const setup = d3
    .marcon()
    .element('.vis')
    .top(20)
    .bottom(20)
    .left(10)
    .right(10)
    .width(960)
    .height(500)
  // .width(window.innerWidth)
  // .height(window.innerHeight)

  setup.render()

  const width = setup.innerWidth()
  const height = setup.innerHeight()
  const svg = setup.svg()

  // parse xValues from data
  const xValuesSet = new Set()
  datasets.forEach(dataset => {
    dataset.forEach(d => {
      xValuesSet.add(d[xVariable])
    })
  })
  const xValues = Array.from(xValuesSet)
  console.log('xValues', xValues)

  // scales
  const x = d3
    .scaleBand()
    .rangeRound([0, width])
    .domain(xValues)
    .padding(0.25)

  const y = d3.scaleLinear().rangeRound([height, 0])

  // axes
  const xAxis = d3.axisBottom(x)
  const yAxis = d3
    .axisRight(y)
    .tickSize(width)
    .tickFormat((d, i, ticks) => (i == ticks.length - 1 ? `${d} value` : d))

  svg
    .append('g')
    .attr('class', 'x axis')
    .attr('transform', `translate(0,${height})`)
    .call(xAxis)

  svg
    .append('g')
    .attr('class', 'y axis')
    .call(customYAxis)

  const stack = d3
    .stack()
    .keys(seriesKeys)
    .order(d3.stackOrderNone)
    .offset(d3.stackOffsetNone)

  let datasetIndex = 0

  // no axis transition on initial render
  redraw(datasets[datasetIndex])

  d3.select('#dataset-zero').on('click', () => {
    console.log('dataset-zero was clicked')
    redraw(datasets[0])
  })

  d3.select('#dataset-one').on('click', () => {
    console.log('dataset-one was clicked')
    redraw(datasets[1])
  })

  d3.select('#dataset-two').on('click', () => {
    console.log('dataset-two was clicked')
    redraw(datasets[2])
  })
  function redraw(data, axisTransitionDuration = 0) {
    // update the y scale
    y.domain([0, jz.arr.max(data.map(d => d.sum))])

    svg
      .select('.y')
      .transition()
      .duration(axisTransitionDuration)
      .call(customYAxis)

    // each data column (a.k.a "key" or "series") needs to be iterated over
    // the variable seriesKeys represents the unique keys of the stacks
    seriesKeys.forEach((key, keyIndex) => {
      const bar = svg
        .selectAll(`.bar-${key}`)
        .data(stack(data)[keyIndex], d => `${d.data[xVariable]}-${key}`)

      bar
        .transition()
        .attr('x', d => x(d.data[xVariable]))
        .attr('y', d => y(d[1]))
        .attr('height', d => y(d[0]) - y(d[1]))

      bar
        .enter()
        .append('rect')
        .attr('class', d => `bar bar-${key}`)
        .attr('x', d => x(d.data[xVariable]))
        .attr('y', d => y(d[1]))
        .attr('height', d => y(d[0]) - y(d[1]))
        .attr('width', x.bandwidth())
        .attr('fill', d => color(key))
        .style('pointer-events', 'none')
    })
  }

  function customYAxis(g) {
    g.call(yAxis)
    g
      .selectAll('.tick:not(:first-of-type) line')
      .attr('stroke', '#777')
      .attr('stroke-dasharray', '2,2')
    g
      .selectAll('.tick text')
      .attr('x', 4)
      .attr('dy', -4)
  }
})
